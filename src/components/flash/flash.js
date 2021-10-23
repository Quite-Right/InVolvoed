import React, {useMemo} from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {flashSelector} from "../../redux/selectors";
import {toggleCarLock} from "../../redux/actions";
import {useAlert} from "react-alert";

export default function Flash() {
    const dispatch = useDispatch();
    const flashState = useSelector(flashSelector);
    const alert = useAlert();
    const {inProcess: disabled} = flashState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(`Сигнал успешно воспроизведен`);
            }
            const onError = (error) => {
                alert.error(`При воспроизведении сигнала произошла ошибка`)
                console.error(error);
            }
            dispatch(toggleCarLock(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('flash-container')}>
            <FontAwesomeIcon color={'grey'} icon={faLightbulb} />
    </div>);
}

