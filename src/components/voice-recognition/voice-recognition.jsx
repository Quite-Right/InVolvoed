import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames';
import stringSimilarity from 'string-similarity';
import './styles.scss';
import {defaultCommand, maintenanceCommand, startCommand, stopCommand, PREDICTION_ACCURACY} from "../../constants";


export default function VoiceRecognition() {
    const [recognizer, setRecognizer] = useState(null);
    const [micActive, setMicActive] = useState(false);
    const [synth, setSynth] = useState(null);

    const toggleRecognition = () => {
        if (micActive && recognizer) {
            recognizer.stop();
            setMicActive(false);
        } else if (recognizer) {
            recognizer.start();
            setMicActive(true);
        }
    }

    const startRecognition = () => {
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            // Создаем распознаватель
            const recognizer = new SpeechRecognition();
            // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
            recognizer.interimResults = true;
            // Какой язык будем распознавать?
            recognizer.lang = 'ru-Ru';
            //
            recognizer.continuous = true;

            // Используем колбек для обработки результатов
            recognizer.onresult = (event) => {
                const currentResult = event.results[event.resultIndex];
                console.log(currentResult);
                const result = currentResult.isFinal ? currentResult[0].transcript : null;
                if (result) {
                    console.log(result);
                    const matches = stringSimilarity.findBestMatch(result, [
                        ...maintenanceCommand,
                        ...startCommand,
                        ...stopCommand,
                        ...defaultCommand,
                    ]);
                    console.log(matches);
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
                        } else if (defaultCommand.includes(resultMatchText)) {
                            const utterance = new SpeechSynthesisUtterance('Я не понял вашу команду, повторите еще раз');
                            synth.speak(utterance);
                        }
                    }
                }
            }

            //
            recognizer.start();
            setRecognizer(recognizer);

            recognizer.onaudiostart = () => {
                setMicActive(true);
            };

            // const synth = window.speechSynthesis;
            // const utterance = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
            //
            // function talk () {
            //     synth.speak (utterance);
            // }
            //
            // function stop () {
            //     synth.pause();
            // }
        } catch (e) {

        }

    }

    console.log(recognizer)

    useEffect(() => {
       setSynth(window.speechSynthesis);
    }, [])


   useEffect(startRecognition, []);

    return window.webkitSpeechRecognition || window.SpeechRecognition ? <div onClick={toggleRecognition} className={cn('mic-container', micActive && 'mic-container_active')}>
        <FontAwesomeIcon color={'grey'} icon={micActive ? faMicrophoneAlt : faMicrophoneAltSlash} />
    </div> : <></>
}