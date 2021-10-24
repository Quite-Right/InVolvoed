import React, {useEffect, useState} from "react";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faTimes, faTimesCircle, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {configuratorActionsSelector} from "../../redux/selectors";
import {useAlert} from "react-alert";
import Toggle from 'react-toggle';
import "./styles.scss";
import "react-toggle/style.css"
import {saveConfiguratorActionsState} from "../../redux/actions/configurator-actions";
import {disabledGrey, red} from "../../constants";

export default function Configurator() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const configuratorActionsReduxState = useSelector(configuratorActionsSelector);
    const [configuratorOpened, setConfiguratorOpened] = useState(false);
    const [configuratorActionsState, setConfiguratorActionsState] = useState({});

    useEffect(() => {
        setConfiguratorActionsState(configuratorActionsReduxState);
    }, [configuratorActionsReduxState, configuratorOpened])

    const toggleConfiguratorOpened = () => {
        setConfiguratorOpened(isOpened => !isOpened);
    };
    
    return (<>
        <div onClick={toggleConfiguratorOpened} className={cn('configurator-button')}>
            <FontAwesomeIcon color={disabledGrey} icon={faCogs} />
        </div>
        <div className={cn(['configurator-container',
            configuratorOpened && 'configurator-container_opened'])}>
            {/*<div onClick={() => setConfiguratorOpened(false)}>*/}
            {/*    <FontAwesomeIcon icon={['far', 'far-window-close']} color={red} size={'2x'} swapOpacity/>*/}
            {/*</div>*/}
            {Object.keys(configuratorActionsState).map(key =>
                <div key={key} className={'configurator-toggle-container'}>
                    <div className={'configurator-toggle-label'}>{configuratorActionsState[key].label}</div>
                    <div className={'configurator-toggle'}>
                        <Toggle
                            defaultChecked={configuratorActionsState[key].repetitions % 2 === 1}
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
            <div className={'configurator-save-button'} onClick={() => {
                dispatch(saveConfiguratorActionsState(configuratorActionsState))
            }}>
                Сохранить
            </div>
        </div>
    </>);
}

