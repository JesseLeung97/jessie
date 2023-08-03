import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import { ResumePersonalProjectDescription } from "../../ResumePersonalProjectDescription";

const ProjectsPage = () => {
    const { language } = useLanguage();
    const [ location ] = useLocation();
    if(location !== "/projects") return null;

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={language.github} />
                <p>{language.projectsPage.summary}</p>
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
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ProjectsPage
}
