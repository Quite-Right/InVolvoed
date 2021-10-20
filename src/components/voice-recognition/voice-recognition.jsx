import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames';
import stringSimilarity from 'string-similarity';
import {defaultCommand, maintenanceCommand, startCommand, stopCommand, PREDICTION_ACCURACY} from "../../constants";
import {defineDayTimeAppeal} from "../../utils/defineDayTime";
import './styles.scss';

export const VoiceRecognition = () => {
    const [recognizer, setRecognizer] = useState(null);
    const [micActive, setMicActive] = useState(false);
    const synth = window.speechSynthesis;

    const toggleRecognition = () => {
        if (micActive && recognizer) {
            recognizer.stop();
            setMicActive(false);
        } else if (recognizer) {
            recognizer.start();
            setMicActive(true);
        }
    }

    const initializeRecognition = () => {
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            // Создаем распознаватель
            const recognizer = new SpeechRecognition();
            // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
            recognizer.interimResults = true;
            // Какой язык будем распознавать?
            recognizer.lang = 'ru-Ru';
            // Чтобы продолжалось распознавание
            recognizer.continuous = true;

            const recognizeComand = (event) => {
                    const currentResult = event.results[event.resultIndex];
                    const result = currentResult.isFinal ? currentResult[0].transcript : null;
                    if (result) {
                        const matches = stringSimilarity.findBestMatch(result, [
                            ...maintenanceCommand,
                            ...startCommand,
                            ...stopCommand,
                            ...defaultCommand,
                        ]);
                        const {bestMatch} = matches;
                        if (bestMatch.rating > PREDICTION_ACCURACY) {
                            const resultMatchText = bestMatch.target;

                            if (maintenanceCommand.includes(resultMatchText)) {
                                const utterance = new SpeechSynthesisUtterance('Вы записаны на техобслуживание на 19:00 по адресу');
                                synth.speak(utterance);
                            } else if (startCommand.includes(resultMatchText)) {
                                const utterance = new SpeechSynthesisUtterance('Машина запущена');
                                synth.speak(utterance);
                            } else if (stopCommand.includes(resultMatchText)) {
                                const utterance = new SpeechSynthesisUtterance('Машина остановлена');
                                synth.speak(utterance);
                            }
                        } else {
                            const utterance = new SpeechSynthesisUtterance('Я не понял вашу команду, повторите еще раз');
                            synth.speak(utterance);
                        }
                        recognizer.onresult = recognizeVolvo;
                    }
            }

            const recognizeVolvo = (event) => {
                const currentResult = event.results[event.resultIndex];
                const result = currentResult.isFinal ? currentResult[0].transcript : null;
                if (result && (result.toLowerCase().includes('volvo') || result.toLowerCase().includes('Вольво'))) {
                    // стартуем норм распознавание и говорим в ответ
                    const utterance = new SpeechSynthesisUtterance(`${defineDayTimeAppeal()} чего бы вы хотели`);
                    synth.speak(utterance);
                    recognizer.onresult = recognizeComand;
                }
            }

            recognizer.onresult = recognizeVolvo;
            setRecognizer(recognizer);
        } catch (e) {

        }

    }


   useEffect(initializeRecognition, []);

    return window.webkitSpeechRecognition || window.SpeechRecognition ? <div onClick={toggleRecognition} className={cn('mic-container', micActive && 'mic-container_active')}>
        <FontAwesomeIcon color={'grey'} icon={micActive ? faMicrophoneAlt : faMicrophoneAltSlash} />
    </div> : <></>
}