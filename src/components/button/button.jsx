import React from "react";
import cn from "classnames";
import "./styles.scss";
import "react-toggle/style.css";

const Button = ({onClick, children, className}) => {
    return <div className={cn(['button', className])} onClick={onClick}>
        {children}
    </div>;
}

export default Button;