import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import { ResumeProjectDescription } from "../../ResumeProjectDescription";
import { ResumeSectionSubtitle } from "../../ResumeSectionSubtitle";
import { ResumeSectionTitle } from "../../ResumeSectionTitle";
import { ResumeTechnicalSkillGroup } from "../../ResumeTechnicalSkillGroup";
import { ResumePersonalProjectDescription } from "../../ResumePersonalProjectDescription";
import classes from "./styles.module.css";


const ResumePage = () => {
    const { language } = useLanguage();
    const [ location ] = useLocation();
    if(location !== "/resume") return null;

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={`${language.firstName} ${language.lastName}`} />
                <p>{language.resumePage.summary}</p>
                <ResumeSectionTitle title={language.resumePage.experience.title} />
                <ResumeSectionSubtitle 
                    title={language.resumePage.experience.jobTitle}
                    organization={language.resumePage.experience.companyName}
                    date={language.resumePage.experience.date}
                />
                { language.resumePage.experience.projects.descriptions.map(desc => {
                    return (
                        <ResumeProjectDescription 
                            title={desc.title}
                            bullets={desc.bullets}
                            techStack={desc.techStack}
                        />
                    );
                })}
                <ResumeSectionTitle title={language.resumePage.education.title} />
                { language.resumePage.education.schools.map(school => {
                    return (
                        <ResumeSectionSubtitle 
                            title={`${school.degree}${school.minor !== "" ? `, Minor ${school.minor}` : ""}`}
                            organization={school.schoolName}
                            date={school.date}
                        />
                    );
                })}
                <ResumeSectionTitle title={language.resumePage.technicalSkills.title} />
                { language.resumePage.technicalSkills.skills.map(skill => {
                    return (
                        <ResumeTechnicalSkillGroup 
                            category={skill.skillName}
                            skills={skill.skills}
                        />
                    );
                })}
                <ResumeSectionTitle title={language.resumePage.personalProjects.title} />
                { language.resumePage.personalProjects.descriptions.map(desc => {
                    return (
                        <ResumePersonalProjectDescription 
                            title={desc.title}
                            link={desc.link}
                            bullets={desc.bullets}
                            techStack={desc.techStack}
                        />
                    );
                })}
                <div class={classes.resume_links_container}>
                    <a target="_blank" href={"../../../../public/JesseLeung_Resume_2022.pdf"}>pdf</a>
                </div>
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ResumePage
}