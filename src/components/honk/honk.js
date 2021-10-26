import React, {useMemo} from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {honkSelector, lanuageCodeSelector} from "../../redux/selectors";
import {honk} from "../../redux/actions";
import {useAlert} from "react-alert";
import {getDictionaryValue} from "../../utils/getDictionaryValue";

export default function Honk() {
    const dispatch = useDispatch();
    const honkState = useSelector(honkSelector);
    const alert = useAlert();
    const {inProcess: disabled} = honkState;
    const audio = useMemo(() => {
        return new Audio('./honk.mp3')
    }, [])
    const lang = useSelector(lanuageCodeSelector);
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(getDictionaryValue('configurator.alerts.car.HonkSuccess', lang));
                audio.play();
            }
            const onError = (error) => {
                alert.error(getDictionaryValue('configurator.alerts.car.StandardFailure', lang))
                console.error(error);
            }
            dispatch(honk(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('honk-container')}>
            <FontAwesomeIcon color={'grey'} icon={faBullhorn} />
    </div>);
}

