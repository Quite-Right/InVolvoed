import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames';
import stringSimilarity from 'string-similarity';
import {
    PREDICTION_ACCURACY,
    startCommand,
    stopCommand,
   closeCommand, openCommand, stopRecognitionCommand, startRecognitionCommand
} from "../../constants";
import {defineDayTimeAppeal} from "../../utils/defineDayTime";
import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {lanuageCodeSelector} from "../../redux/selectors";
import {getDictionaryValue} from "../../utils/getDictionaryValue";
import {engineOff, engineOn, lockCar, unlockCar} from "../../redux/actions";

export const VoiceRecognition = () => {
    const lang = useSelector(lanuageCodeSelector);
    const [recognizer, setRecognizer] = useState(null);
    const [micActive, setMicActive] = useState(false);
    const synth = window.speechSynthesis;
    const dispatch = useDispatch();


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
        if (recognizer && micActive) {
            recognizer.stop();
            setMicActive(false);
        }
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            // Создаем распознаватель
            const recognizer = new SpeechRecognition();
            // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
            recognizer.interimResults = true;
            // Какой язык будем распознавать?
            recognizer.lang = lang === 'RU' ? 'ru-Ru' : 'en-US';
            // Чтобы продолжалось распознавание
            recognizer.continuous = true;

            let timeout = null;

            const recognizeCommand = (event) => {
                    const currentResult = event.results[event.resultIndex];
                    const result = currentResult.isFinal ? currentResult[0].transcript : null;
                    if (result) {
                        console.log(result)
                        const matches = stringSimilarity.findBestMatch(result.toLowerCase(), [
                            ...startCommand,
                            ...stopCommand,
                            ...closeCommand,
                            ...openCommand,
                            ...stopRecognitionCommand,
                        ]);
                        const {bestMatch} = matches;
                        console.log(matches)
                        if (bestMatch.rating > PREDICTION_ACCURACY) {
                            const resultMatchText = bestMatch.target;

                            if (startCommand.includes(resultMatchText)) {
                                const onSuccess = () => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                        'voice.reactions.start', lang));
                                    synth.speak(utterance);
                                }
                                const onError = (error) => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue('alerts.car.StandardFailure', lang))
                                    console.log(error)
                                    synth.speak(utterance);
                                }
                                dispatch(engineOn(onSuccess, onError));
                            } else if (stopCommand.includes(resultMatchText)) {
                                const onSuccess = () => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                        'voice.reactions.stop', lang));
                                    synth.speak(utterance);
                                }
                                const onError = (error) => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue('alerts.car.StandardFailure', lang))
                                    console.log(error)
                                    synth.speak(utterance);
                                }
                                dispatch(engineOff(onSuccess, onError));
                            } else if (closeCommand.includes(resultMatchText)) {
                                const onSuccess = () => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                        'voice.reactions.close', lang));
                                    synth.speak(utterance);
                                }
                                const onError = (error) => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue('alerts.car.StandardFailure', lang))
                                    console.log(error)
                                    synth.speak(utterance);
                                }
                                dispatch(lockCar(onSuccess, onError));

                            } else if (openCommand.includes(resultMatchText)) {
                                const onSuccess = () => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                        'voice.reactions.open', lang));
                                    synth.speak(utterance);
                                }
                                const onError = (error) => {
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue('alerts.car.StandardFailure', lang))
                                    console.log(error)
                                    synth.speak(utterance);
                                }
                                dispatch(unlockCar(onSuccess, onError));

                            } else if (stopRecognitionCommand.includes(resultMatchText)) {
                                const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                    'voice.reactions.chao', lang));
                                synth.speak(utterance);
                            }
                            recognizer.onresult = recognizeHola;
                            if (timeout)
                                clearTimeout(timeout);
                        } else {
                            const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                'voice.reactions.noMatch', lang));
                            synth.speak(utterance);
                            if (timeout) {
                                clearTimeout(timeout);
                                timeout = setTimeout(() => {
                                    recognizer.onresult = recognizeHola;
                                    const utterance = new SpeechSynthesisUtterance(getDictionaryValue(
                                        'voice.reactions.noMatch', lang));
                                    synth.speak(utterance);
                                }, 5000);
                            }
                        }
                    }
            }

            const recognizeHola = (event) => {
                const currentResult = event.results[event.resultIndex];
                const result = currentResult.isFinal ? currentResult[0].transcript : null;
                if (result) {
                    const matches = stringSimilarity.findBestMatch(result.toLowerCase(), [
                        ...startRecognitionCommand,
                    ]);
                    const {bestMatch} = matches;
                    if (bestMatch.rating > PREDICTION_ACCURACY) {
                        // стартуем норм распознавание и говорим в ответ
                        const utterance = new SpeechSynthesisUtterance(`${defineDayTimeAppeal(lang)} ${
                            getDictionaryValue('voice.reactions.hola', lang)}`);
                        synth.speak(utterance);
                        recognizer.onresult = recognizeCommand;
                    }
                }
            }

            recognizer.onresult = recognizeHola;
            setRecognizer(recognizer);
        } catch (e) {

        }

    }


   useEffect(initializeRecognition, [lang]);

    return window.webkitSpeechRecognition || window.SpeechRecognition ? <div onClick={toggleRecognition} className={cn('mic-container', micActive && 'mic-container_active')}>
        <FontAwesomeIcon color={'grey'} icon={micActive ? faMicrophoneAlt : faMicrophoneAltSlash} />
    </div> : <></>
}