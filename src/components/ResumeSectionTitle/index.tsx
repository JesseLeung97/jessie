import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface ResumeSectionTitleProps {
    title: string
}

const ResumeSectionTitle: FunctionalComponent<ResumeSectionTitleProps> = ({
    title
}) => {
    return (
        <div class={classes.title_container}>
            <span class={classes.title_inner}>{title}</span>
        </div>
    );
}

export {
    ResumeSectionTitle
}