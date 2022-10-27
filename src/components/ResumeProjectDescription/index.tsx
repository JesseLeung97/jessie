import { FunctionalComponent } from "preact";
import { useLanguage } from "../LanguageManager";
import classes from "./styles.module.css";

interface ResumeProjectDescriptionProps {
    title: string,
    bullets: string[],
    techStack: string
}

const ResumeProjectDescription: FunctionalComponent<ResumeProjectDescriptionProps> = ({
    title,
    bullets,
    techStack
}) => {
    const { language } = useLanguage();

    return (
        <div>
            <div>{title}</div>
            { bullets.map(bullet => <div class={classes.bullet}>{`${bullet}`}</div>)}
            <div class={classes.tech_stack}>{`${language.resumePage.experience.techStackTitle} ${techStack}`}</div>
        </div>
    );
}

export {
    ResumeProjectDescription
}