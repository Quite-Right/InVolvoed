import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {flashSelector, lanuageCodeSelector} from "../../redux/selectors";
import {toggleCarLock} from "../../redux/actions";
import {useAlert} from "react-alert";
import {disabledGrey} from "../../constants";
import {getDictionaryValue} from "../../utils/getDictionaryValue";

export default function Flash() {
    const dispatch = useDispatch();
    const flashState = useSelector(flashSelector);
    const alert = useAlert();
    const {inProcess: disabled} = flashState;
    const lang = useSelector(lanuageCodeSelector);
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(getDictionaryValue('alerts.car.FlashSuccess', lang));
            }
            const onError = (error) => {
                alert.error(getDictionaryValue('alerts.car.StandardFailure', lang))
                console.error(error);
            }
            dispatch(toggleCarLock(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('flash-container')}>
            <FontAwesomeIcon color={disabledGrey} icon={faLightbulb}  />
    </div>);
}

