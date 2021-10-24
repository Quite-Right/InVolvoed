import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {rotationSelector} from "../../redux/selectors";
import cn from 'classnames';
import {rotateLeft, rotateRight, rotationStop} from "../../redux/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faPause} from "@fortawesome/free-solid-svg-icons";
import './styles.scss';
import {disabledGrey} from "../../constants";


const SceneControls = () => {
    const rotation = useSelector(rotationSelector);
    const dispatch = useDispatch();

    return (
       <>
            <div className={cn('arrow-container', 'arrow-container_left')} onClick={() => {
                dispatch(rotateLeft())
            }}>
                <FontAwesomeIcon color={disabledGrey} icon={faChevronLeft} size={'2x'}/>
            </div>
            <div className={cn('arrow-container', 'arrow-container_right')} onClick={() => {
                dispatch(rotateRight())
            }}>
                <FontAwesomeIcon color={disabledGrey} icon={faChevronRight} size={'2x'}/>
            </div>
            {rotation !== 0 && <div onClick={() => {
                dispatch(rotationStop());
            }} className={cn('rotation-stop-container')}>
                <FontAwesomeIcon color={disabledGrey} icon={faPause} size={'2x'}/>
            </div>}
       </>
    );
}

export default SceneControls;