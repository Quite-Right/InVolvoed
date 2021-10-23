import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThermometerEmpty, faThermometerFull} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {climatizationSelector} from "../../redux/selectors";
import {toggleCarClimatization} from "../../redux/actions";
import {useAlert} from "react-alert";
import {disabledGrey, red} from "../../constants";

export default function Climatization() {
    const dispatch = useDispatch();
    const climatizationState = useSelector(climatizationSelector);
    const alert = useAlert();
    const {isTurnedOn, inProcess: disabled} = climatizationState;
    const onClick = () => {
        if (!disabled) {
            const onSuccess = () => {
                alert.success(`Климат контроль успешно ${isTurnedOn ? 'выключен' : 'включен'}`)
            }
            const onError = (error) => {
                alert.error(`При ${isTurnedOn ? 'выключении' : 'включении'} климат контроля произошла ошибка`)
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

