import { usePageTransition } from "../../PageTransition";
import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import { ResumePersonalProjectDescription } from "../../ResumePersonalProjectDescription";
import classes from "./styles.module.css";

const ProjectsPage = () => {
    const { language } = useLanguage();
    const [ location ] = useLocation();
    const { changePage } = usePageTransition();
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
                <div class={classes.projects_links_container}>
                    <div class={classes.projects_links_container_button_container}>
                        <span class={classes.projects_links_container_button} onClick={() => changePage("resume")}>{language.projectsPage.work.title}</span>
                    </div>
                    <div class={classes.projects_links_container_button_container}>
                        <a class={classes.projects_links_container_button} target="_blank" href={language.contactPage.links.github.link}>{language.contactPage.links.github.name}</a>
                    </div>
                </div>
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ProjectsPage
}
