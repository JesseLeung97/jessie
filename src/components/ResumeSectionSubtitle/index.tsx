import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface ResumeSectionSubtitleProps {
    title: string,
    organization: string,
    date: string
}

const ResumeSectionSubtitle: FunctionalComponent<ResumeSectionSubtitleProps> = ({
    title,
    organization,
    date
}) => {
    return (
        <div class={classes.title_container}>
            <div class={classes.title}>{title}</div>
            <div class={classes.info_container}>
                <span>{organization}</span>
                <span>{date}</span>
            </div>
        </div>
    );
}

export {
    ResumeSectionSubtitle
}