import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import { ResumeProjectDescription } from "../../ResumeProjectDescription";
import { ResumeSectionTitle } from "../../ResumeSectionTitle";
import classes from "./styles.module.css";

const ResumePage = () => {
    const { language } = useLanguage();
    const [location] = useLocation();
    if(location !== "/resume") return null;

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={`${language.firstName} ${language.lastName}`} />
                <p>{language.resumePage.summary}</p>
                <ResumeSectionTitle title={language.resumePage.experience.title} />
                <div class={classes.job_title_container}>
                    <div class={classes.job_title}>{language.resumePage.experience.jobTitle}</div>
                    <div class={classes.job_info_container}>
                        <span>{language.resumePage.experience.companyName}</span>
                        <span>{language.resumePage.experience.date}</span>
                    </div>
                </div>
                <div class={classes.job_title}>{language.resumePage.experience.projects.title}</div>
                { language.resumePage.experience.projects.descriptions.map(desc => {
                    return (
                        <ResumeProjectDescription 
                            title={desc.title}
                            bullets={desc.bullets}
                            techStack={desc.techStack}
                        />
                    );
                })}
                
                
                <ResumeSectionTitle title={language.resumePage.education} />
                <ResumeSectionTitle title={language.resumePage.technicalSkills} />
                <ResumeSectionTitle title={language.resumePage.personalProjects} />
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ResumePage
}