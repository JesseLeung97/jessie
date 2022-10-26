import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface VerticalTextProps {
    isRed?: boolean
}

const VerticalText: FunctionalComponent<VerticalTextProps> = ({
    isRed,
    children
}) => {
    return (
        <span class={`${classes.vertical_text_inner} ${isRed ? classes.is_red : ""}`}>
            {children}
        </span>
    );
}

export {
    VerticalText
}