import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface ResumeTechnicalSkillGroupProps {
    category: string,
    skills: string[]
}

const ResumeTechnicalSkillGroup: FunctionalComponent<ResumeTechnicalSkillGroupProps> = ({
    category,
    skills
}) => {
    return (
        <div class={classes.skill_title}>
            <span class={classes.skill}>{`${category}: `}</span>
            <span class={classes.skills_list}>{skills.map((skill, i) => (i != skills.length - 1) ? `${skill}, ` : skill)}</span>
        </div>
    );
}

export {
    ResumeTechnicalSkillGroup
}