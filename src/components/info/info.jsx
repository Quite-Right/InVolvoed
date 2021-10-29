import React, {useState} from "react";
import styles from "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {lanuageCodeSelector, lockSelector} from "../../redux/selectors";
import {createPortal} from "react-dom";

export default function Info() {
    const dispatch = useDispatch();
    const lang = useSelector(lanuageCodeSelector);
    const [isOpened, setIsOpened] = useState(true);
    const onClick = () => {
       setIsOpened(isOpened => !isOpened);
    };
    return (<>
            <div onClick={onClick} className={cn('info-button')}>
                <FontAwesomeIcon color={'grey'} icon={faInfo} />
            </div>
        {createPortal(<div className={cn(['info-container', isOpened && 'info-container_active'])}>
            <div className={styles}>

            </div>
        </div>, document.body)}

    </>);
}

