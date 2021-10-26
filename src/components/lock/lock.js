import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUnlock} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {lanuageCodeSelector, lockSelector} from "../../redux/selectors";
import {toggleCarLock} from "../../redux/actions";
import {useAlert} from "react-alert";
import {getDictionaryValue} from "../../utils/getDictionaryValue";

export default function Lock() {
    const dispatch = useDispatch();
    const lockState = useSelector(lockSelector);
    const lang = useSelector(lanuageCodeSelector);
    const alert = useAlert();
    const {isLocked, inProcess: disabled} = lockState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(getDictionaryValue(isLocked ?  'configurator.alerts.car.OpenSuccess'  :
                    'configurator.alerts.car.CloseSuccess', lang));
            }
            const onError = (error) => {
                alert.error(getDictionaryValue('configurator.alerts.car.StandardFailure', lang))

                console.error(error);
            }
            dispatch(toggleCarLock(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('lock-container')}>
            <FontAwesomeIcon color={'grey'} icon={isLocked ? faLock : faUnlock} />
    </div>);
}

