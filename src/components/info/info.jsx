import React, {useState} from "react";
import styles from "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {createPortal} from "react-dom";
import LandingPage from "../landing-page/landing";

export default function Info() {
    const [isOpened, setIsOpened] = useState(true);
    const open = () => {
       setIsOpened(true);
    };

    const close = () => {
        setIsOpened(false);
    };

    return (<>
            <div onClick={open} className={cn('info-button')}>
                <FontAwesomeIcon color={'grey'} icon={faInfo} />
            </div>
        {createPortal(
            <LandingPage isOpened={isOpened} close={close} />
            , document.body)}
    </>);
}

