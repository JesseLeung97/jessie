import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface PageTitleProps {
    title: string
}

const PageTitle: FunctionalComponent<PageTitleProps> = ({
    title
}) => {
    return (
        <div class={classes.title_container}>
            <span class={classes.title_inner}>{title}</span>
        </div>
    );
}

export {
    PageTitle
}