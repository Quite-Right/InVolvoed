import React, {useEffect, useState} from "react";
import "./styles.scss";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {changeCarColor} from "../../redux/actions";
import {createCSSColorFromProportion} from "../../utils/createCSSColorFromProportion";
import {carColorSelector} from "../../redux/selectors";
import {SketchPicker} from "react-color";

export const ChangeColorButton = () => {
    const dispatch = useDispatch();
    const color = useSelector(carColorSelector)
    console.log(color)
    const onChangeComplete = (newColor) => {
        console.log(newColor);
        dispatch(changeCarColor({
            r: newColor.rgb.r / 255,
            g: newColor.rgb.g / 255,
            b: newColor.rgb.b / 255,
        }));
    }
    const [isOpened, setIsOpened] = useState(false);

    return (<>
        <div onClick={(event) => {
            setIsOpened(isOpened => !isOpened);
        }}
                 className={cn('change-color-button')}
                 style={{
                     backgroundColor: createCSSColorFromProportion(color),
                 }}>
        </div>
        {isOpened && <SketchPicker
                className={'change-color__sketch-picker'}
                color={{
                    r: color.r * 255,
                    g: color.g * 255,
                    b: color.b * 255,
                }}
                onChangeComplete={onChangeComplete}
                disableAlpha={true}
        />}
    </>);
}

