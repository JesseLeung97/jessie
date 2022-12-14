import { FunctionalComponent } from "preact";
import { useLanguage } from "../LanguageManager";
import classes from "./styles.module.css";

interface ResumeProjectDescriptionProps {
    title: string,
    bullets: string[],
    techStack: string[]
}

const ResumeProjectDescription: FunctionalComponent<ResumeProjectDescriptionProps> = ({
    title,
    bullets,
    techStack
}) => {
    const { language } = useLanguage();

    return (
        <div class={classes.job_desc_container}>
            <div class={classes.job_desc_title}>{title}</div>
            { bullets.map(bullet => <div class={classes.bullet}>{`${bullet}`}</div>)}
            <div class={classes.tech_stack}>
                <span class={classes.tech_stack_title}>{`${language.resumePage.experience.techStackTitle} `}</span>{techStack.map((tech, i) => i !== techStack.length - 1 ? `${tech}, ` : tech)}
            </div>
        </div>
    );
}

export {
    ResumeProjectDescription
}