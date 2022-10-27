import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

const ContentWrapper: FunctionalComponent = ({
    children
}) => {
    return (
        <div class={classes.content_wrapper}>{children}</div>
    );
}

export {
    ContentWrapper
}