import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThermometerEmpty, faThermometerFull} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {climatizationSelector, lanuageCodeSelector} from "../../redux/selectors";
import {toggleCarClimatization} from "../../redux/actions";
import {useAlert} from "react-alert";
import {disabledGrey, red} from "../../constants";
import {getDictionaryValue} from "../../utils/getDictionaryValue";

export default function Climatization() {
    const dispatch = useDispatch();
    const climatizationState = useSelector(climatizationSelector);
    const lang = useSelector(lanuageCodeSelector);
    const alert = useAlert();
    const {isTurnedOn, inProcess: disabled} = climatizationState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(getDictionaryValue(isTurnedOn ? 'alerts.car.ClimatizationOffSuccess' :
                    'alerts.car.ClimatizationOnSuccess', lang))
            }
            const onError = (error) => {
                alert.error(getDictionaryValue('alerts.car.StandardFailure', lang))
                console.error(error);
            }
            dispatch(toggleCarClimatization(onSuccess, onError));
        }
    };
    return (<div onClick={onClick} className={cn('climatization-container')}>
            <FontAwesomeIcon
                color={isTurnedOn ? red : disabledGrey}
                icon={isTurnedOn ? faThermometerFull : faThermometerEmpty}
            />
    </div>);
}

