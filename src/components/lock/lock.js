import React from "react";
import "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUnlock} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const dispatch = useDispatch();
    const isLocked = useSelector()


    return (<div onClick={} className={cn('lock-container')}>
            <FontAwesomeIcon color={'grey'} icon={isLocked ? faLock : faUnlock} />
        </div>);
}

