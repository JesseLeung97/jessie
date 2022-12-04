import classes from "./styles.module.css";
import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { useLanguage } from "../LanguageManager";

interface VerticalTextProps {
    text: string,
    isRed?: boolean,
    onClick?: (...args: any) => any
}

const VerticalText: FunctionalComponent<VerticalTextProps> = ({
    text,
    isRed,
    onClick
}) => {
    return (
        <span class={`${classes.vertical_text_inner} ${onClick ? classes.is_link : ""} ${isRed ? classes.is_red : ""}`} onClick={onClick}>
            {text}
        </span>
    );
}

export {
    VerticalText
}