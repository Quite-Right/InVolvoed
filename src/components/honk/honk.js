import React, {useMemo} from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {honkSelector} from "../../redux/selectors";
import {toggleCarLock} from "../../redux/actions";
import {useAlert} from "react-alert";

export default function Honk() {
    const dispatch = useDispatch();
    const honkState = useSelector(honkSelector);
    const alert = useAlert();
    const {inProcess: disabled} = honkState;
    const audio = useMemo(() => {
        return new Audio('./honk.mp3')
    }, [])
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(`Сигнал успешно воспроизведен`);
                audio.play();
            }
            const onError = (error) => {
                alert.error(`При воспроизведении сигнала произошла ошибка`)
                console.error(error);
            }
            dispatch(toggleCarLock(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('honk-container')}>
            <FontAwesomeIcon color={'grey'} icon={faBullhorn} />
    </div>);
}

