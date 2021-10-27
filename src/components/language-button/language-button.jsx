import React from "react";
import "./styles.scss";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {lanuageCodeSelector} from "../../redux/selectors";
import {setLanuageActionCreator} from "../../redux/actions";

export default function LanguageButton() {
    const dispatch = useDispatch();
    const lang = useSelector(lanuageCodeSelector);
    const onClick = () => {
        dispatch(setLanuageActionCreator(lang === 'RU' ? 'EN' : 'RU'));
    };
    return (<div onClick={onClick} className={cn('language-button')}>
        {lang}
    </div>);
}

