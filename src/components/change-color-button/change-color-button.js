import React from "react";
import "./styles.scss";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {changeCarColor} from "../../redux/actions";
import {createCSSColorFromProportion} from "../../utils/createCSSColorFromProportion";

export const ChangeColorButton = ({color}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(changeCarColor(color));
    }
    return (<div onClick={onClick}
                 className={cn('change-color-button')}
                 style={{
                     backgroundColor: createCSSColorFromProportion(color),
                 }}>
    </div>);
}

