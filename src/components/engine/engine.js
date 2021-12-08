import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {engineSelector, lanuageCodeSelector} from "../../redux/selectors";
import {toggleCarEngine} from "../../redux/actions";
import {useAlert} from "react-alert";
import {green, disabledGray} from "../../constants";
import {getDictionaryValue} from "../../utils/getDictionaryValue";

export default function Engine() {
    const dispatch = useDispatch();
    const engineState = useSelector(engineSelector);
    const lang = useSelector(lanuageCodeSelector);
    const alert = useAlert();
    const {isTurnedOn, inProcess: disabled} = engineState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(getDictionaryValue(isTurnedOn ? 'alerts.car.StopSuccess' :
                    'alerts.car.StartSuccess', lang))
            }
            const onError = (error) => {
                alert.error(getDictionaryValue('alerts.car.StandardFailure', lang))
                console.error(error);
            }
            dispatch(toggleCarEngine(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('engine-container')}>
        <FontAwesomeIcon color={isTurnedOn ? green : disabledGray} icon={faKey} />
    </div>);
}

