import React, {useState} from "react";
import styles from "./styles.scss";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {lanuageCodeSelector, lockSelector} from "../../redux/selectors";
import {createPortal} from "react-dom";
import {dictionary} from "../../constants";
import {getDictionaryValue} from "../../utils/getDictionaryValue";
import LandingPage from "../landing-page/landing";

export default function Info() {
    const [isOpened, setIsOpened] = useState(false);
    const open = () => {
       setIsOpened(true);
    };

    const close = () => {
        setIsOpened(false);
    };

    // const gestures = [{
    //     name: getDictionaryValue('landingPage.gestures.descriptions[0].title', lang),
    //     desctiption: getDictionaryValue('landingPage.gestures.descriptions[0].text', lang),
    //     image: ''
    // }]

    return (<>
            <div onClick={open} className={cn('info-button')}>
                <FontAwesomeIcon color={'grey'} icon={faInfo} />
            </div>
        {createPortal(
            <LandingPage isOpened={isOpened} close={close} />
            // <div className={cn(['info-container', isOpened && 'info-container_active'])}>
            // <div className={styles.landing}>
            //     <div className={styles.landingBody}>
            //         <div className={styles.landingHeader}>
            //             <nav className={styles.landingNav}>
            //                 {
            //                     Object.keys(dictionary.landingPage).map((key) => {
            //                         return key !== 'references' ? <a href={`#${key}`} key={key} className={styles.landingNav__listItem}>
            //                             {getDictionaryValue(`landingPage.${key}.title`, lang)}
            //                         </a> : '';
            //                     })
            //                 }
            //             </nav>
            //         </div>
            //         <div className={styles.landingMain}>
            //             <div className={styles.landingSection} id={'aboutHack'}>
            //                 <div>
            //                     <div className={styles.landingSectionHeader}>
            //                         {getDictionaryValue('landingPage.aboutHack.title', lang)}
            //                     </div>
            //                     <div>
            //                         {dictionary.landingPage.aboutHack.text.map(
            //                             (langObject, index) => (
            //                             <p className={styles.landingSectionText} key={index + lang}>
            //                                 {langObject[lang]}
            //                             </p>
            //                         ))}
            //                     </div>
            //                 </div>
            //                 <div>
            //                 </div>
            //             </div>
            //             {/*<div className={styles.landingSection} id={'task'}>*/}
            //             {/*    <div className={styles.landingSectionHeader}>*/}
            //             {/*        {getDictionaryValue('landingPage.task.title', lang)}*/}
            //             {/*    </div>*/}
            //             {/*</div>*/}
            //             <div className={styles.landingSection} id={'solution'}>
            //                 <div>
            //                     <div className={styles.landingSectionHeader}>
            //                         {getDictionaryValue('landingPage.solution.title', lang)}
            //                     </div>
            //                     <div>
            //                         {dictionary.landingPage.solution.text.map(
            //                             (langObject, index) => (
            //                                 <p className={styles.landingSectionText} key={index + lang}>
            //                                     {langObject[lang]}
            //                                 </p>
            //                             ))}
            //                     </div>
            //                     <ul>
            //                         {dictionary.landingPage.solution.functions.map((langObject, index) => (
            //                             <li className={[styles.landingSectionText]} key={index + lang}>
            //                                 {langObject[lang]}
            //                             </li>
            //                         ))})}
            //                     </ul>
            //                 </div>
            //                 <div>
            //
            //                 </div>
            //             </div>
            //             <div className={styles.landingSection} id={'voice'}>
            //                 <div>
            //                     <div className={styles.landingSectionHeader}>
            //                         {getDictionaryValue('landingPage.solution.title', lang)}
            //                     </div>
            //                     <div>
            //                         {dictionary.landingPage.voice.text.map(
            //                             (langObject, index) => (
            //                                 <p className={styles.landingSectionText} key={index + lang}>
            //                                     {langObject[lang]}
            //                                 </p>
            //                             ))
            //                         }
            //                     </div>
            //                     <div>
            //                         <ul>
            //                             {dictionary.landingPage.voice.commands.map((voiceLangObject, index) => (
            //                                 <li key={index + lang}>
            //                                     <span>{voiceLangObject.title[lang]}</span> -
            //                                     {voiceLangObject.text[lang]}
            //                                 </li>
            //                             ))}
            //                         </ul>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className={styles.landingSection} id={'gestures'}>
            //                 <div>
            //                     <div className={styles.landingSectionHeader}>
            //                         {getDictionaryValue('landingPage.solution.title', lang)}
            //                     </div>
            //                     <div>
            //                         {dictionary.landingPage.voice.text.map(
            //                             (langObject, index) => (
            //                                 <p className={styles.landingSectionText} key={index + lang}>
            //                                     {langObject[lang]}
            //                                 </p>
            //                             ))}
            //                     </div>
            //                 </div>
            //                 <div>
            //                     <ul>
            //                         <li>
            //                             {}
            //                         </li>
            //                     </ul>
            //                 </div>
            //             </div>
            //             </div>
            //             <div className={styles.landingSection} id={'references'}>
            //
            //             </div>
            //         </div>
            //     </div>
            // </div>
            , document.body)}
    </>);
}

