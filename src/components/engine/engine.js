import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {engineSelector} from "../../redux/selectors";
import {toggleCarEngine} from "../../redux/actions";
import {useAlert} from "react-alert";
import {green, disabledGrey} from "../../constants";

export default function Engine() {
    const dispatch = useDispatch();
    const engineState = useSelector(engineSelector);
    const alert = useAlert();
    const {isTurnedOn, inProcess: disabled} = engineState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(`Двигатель успешно ${isTurnedOn ? 'выключен' : 'включен'}`)
            }
            const onError = (error) => {
                alert.error(`При ${isTurnedOn ? 'выключении' : 'включении'} двигателя произошла ошибка`)
                console.error(error);
            }
            dispatch(toggleCarEngine(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('engine-container')}>
        <FontAwesomeIcon color={isTurnedOn ? green : disabledGrey} icon={faKey} />
    </div>);
}

