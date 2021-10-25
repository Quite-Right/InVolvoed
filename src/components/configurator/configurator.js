import React, {useEffect, useState} from "react";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {configuratorActionsSelector, lanuageCodeSelector} from "../../redux/selectors";
import Toggle from 'react-toggle';
import {saveConfiguratorActionsState} from "../../redux/actions/configurator-actions";
import {disabledGrey, red} from "../../constants";
import "./styles.scss";
import "react-toggle/style.css";
import {getDictionaryValue} from "../../utils/getDictionaryValue";
import Button from "../button/button";

export default function Configurator() {
    const dispatch = useDispatch();
    const configuratorActionsReduxState = useSelector(configuratorActionsSelector);
    const lang = useSelector(lanuageCodeSelector);
    const [configuratorOpened, setConfiguratorOpened] = useState(false);
    const [configuratorActionsState, setConfiguratorActionsState] = useState({});

    useEffect(() => {
        setConfiguratorActionsState({...configuratorActionsReduxState});
    }, [configuratorOpened, configuratorActionsReduxState]);

    const toggleConfiguratorOpened = () => {
        setConfiguratorOpened(isOpened => !isOpened);
    };

    return (<>
        <div onClick={toggleConfiguratorOpened} className={cn('configurator-button')}>
            <FontAwesomeIcon color={disabledGrey} icon={faCogs} />
        </div>
        <div className={cn(['configurator-container',
            configuratorOpened && 'configurator-container_opened'])}>
            <div className={'configurator-container__header'}>
                <div className={'configurator-container__title'}>
                    {getDictionaryValue('configurator.Title', lang)}
                </div>
                <div className={'configurator-close-button'} onClick={() => setConfiguratorOpened(false)}>
                    <FontAwesomeIcon icon={faTimes} color={red} size={'2x'} swapOpacity/>
                </div>
            </div>
            <div className={'configurator-container__main'}>
                {Object.keys(configuratorActionsState).sort((key1, key2) =>
                    configuratorActionsState[key1].order - configuratorActionsState[key2].order).map(key =>
                    <div key={key} className={'configurator-toggle-container'}>
                        <div className={'configurator-toggle-label'}>{configuratorActionsState[key].label}</div>
                        <div className={'configurator-toggle'}>
                            <Toggle
                                checked={configuratorActionsState[key].repetitions % 2 === 1}
                                icons={false}
                                onChange={() => {
                                    setConfiguratorActionsState(configuratorState => ({
                                            ...configuratorState,
                                            [key]: {
                                                ...configuratorState[key],
                                                repetitions: configuratorState[key].repetitions + 1,
                                            }
                                        })
                                    )
                                }}
                            />
                        </div>
                    </div>
                )}
                <Button onClick={() => {
                    dispatch(saveConfiguratorActionsState(configuratorActionsState))
                }} className={'configurator-save-button'}>
                    {getDictionaryValue('configurator.SaveButton', lang)}
                </Button>
            </div>

        </div>
    </>);
}

