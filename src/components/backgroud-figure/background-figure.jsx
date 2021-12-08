import React from "react";
import cn from "classnames";
import "./styles.scss";
import "react-toggle/style.css";

const BackgroundFigure = ({position = {}, type = 'square', blur = false}) => {
    return <div className={cn(['background-figure', blur && 'background-figure_blur'])} style={{...position}}>
        {type === 'square' && <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="29.7112" y="29.2499" width="97.7609" height="97.7609" stroke="#00C4F0" stroke-width="6"/>
            <g filter="url(#filter0_f_30_59)">
                <rect x="30.7112" y="30.5734" width="95.7609" height="95.7609" stroke="#00C4F0" stroke-opacity="0.52" stroke-width="8"/>
            </g>
            <defs>
                <filter id="filter0_f_30_59" x="0.711243" y="0.573364" width="155.761" height="155.761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="13" result="effect1_foregroundBlur_30_59"/>
                </filter>
            </defs>
        </svg>}
        {type === 'circle' && <svg width="152" height="151" viewBox="0 0 152 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75.8728" cy="75.1741" r="51.0954" stroke="#00C4F0" stroke-width="4.81501"/>
            <g filter="url(#filter0_f_26_563)">
                <circle cx="75.8728" cy="75.1741" r="51.0954" stroke="#00C4F0" stroke-opacity="0.52" stroke-width="6.42002"/>
            </g>
            <defs>
                <filter id="filter0_f_26_563" x="0.702265" y="0.00359535" width="150.341" height="150.341" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10.4325" result="effect1_foregroundBlur_26_563"/>
                </filter>
            </defs>
        </svg>}
        {type === 'triangle' && <svg width="178" height="162" viewBox="0 0 178 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.0062 131.064L88.589 34.7918L144.172 131.064H33.0062Z" stroke="#00C4F0" stroke-width="6"/>
            <g filter="url(#filter0_f_26_564)">
                <path d="M33.0062 131.064L88.589 34.7918L144.172 131.064H33.0062Z" stroke="#00C4F0" stroke-opacity="0.52" stroke-width="8"/>
            </g>
            <defs>
                <filter id="filter0_f_26_564" x="0.077961" y="0.791748" width="177.022" height="160.272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="13" result="effect1_foregroundBlur_26_564"/>
                </filter>
            </defs>
        </svg>}

    </div>;
}

export default BackgroundFigure;

