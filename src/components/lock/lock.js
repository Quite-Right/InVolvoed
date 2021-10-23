import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUnlock} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {lockSelector} from "../../redux/selectors";
import {toggleCarLock} from "../../redux/actions";
import {useAlert} from "react-alert";

export default function Lock() {
    const dispatch = useDispatch();
    const lockState = useSelector(lockSelector);
    const alert = useAlert();
    const {isLocked, inProcess: disabled} = lockState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(`Машина успешно ${isLocked ? 'открыта' : 'закрыта'}`)
            }
            const onError = (error) => {
                alert.error(`При ${isLocked ? 'открытии' : 'закрытии'} машины произошла ошибка`)
                console.error(error);
            }
            dispatch(toggleCarLock(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('lock-container')}>
            <FontAwesomeIcon color={'grey'} icon={isLocked ? faLock : faUnlock} />
    </div>);
}

