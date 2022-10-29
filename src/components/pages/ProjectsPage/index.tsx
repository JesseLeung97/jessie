import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import { ResumeSectionTitle } from "../../ResumeSectionTitle";
import { ResumePersonalProjectDescription } from "../../ResumePersonalProjectDescription";
import classes from "./styles.module.css";
import { ResumeProjectDescription } from "../../ResumeProjectDescription";

const ProjectsPage = () => {
    const { language } = useLanguage();
    const [ location ] = useLocation();
    if(location !== "/projects") return null;

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={language.github} />
                <p>{language.projectsPage.summary}</p>
                <ResumeSectionTitle title={language.projectsPage.personal.title} />
                { language.projectsPage.personal.descriptions.map(desc => {
                    return (
                        <ResumePersonalProjectDescription 
                            title={desc.title}
                            link={desc.link}
                            bullets={desc.bullets}
                            techStack={desc.techStack}
                        />
                    );
                })}
                <ResumeSectionTitle title={language.projectsPage.work.title} />
                { language.projectsPage.work.descriptions.map(desc => {
                    return (
                        <ResumeProjectDescription 
                            title={desc.title}
                            bullets={desc.bullets}
                            techStack={desc.techStack}
                        />
                    );
                })}
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ProjectsPage
}