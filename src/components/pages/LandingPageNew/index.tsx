import { TokyoScape } from "../../../assets/images/TokyoScape";
import { VerticalText } from "../../VerticalText";
import classes from "./styles.module.css";
import { useLocation } from "wouter/preact";
import { useLanguage } from "../../LanguageManager";
import { ContentWrapper } from "../../ContentWrapper";

const LandingPageNew = () => {
    const { language } = useLanguage();
    const [ location ] = useLocation();
    if (location !== "/") return null;

    const goToPage = (pageName: string) => {
        window.history.pushState({}, "", `/${pageName}`);
    }

    return (
        <section class={classes.body_container}>
            <div class={classes.main_content_container}>
                <TokyoScape className={classes.tokyo_scape}/>
                <div class={classes.text_container}>
                    <VerticalText isRed={true}>{language.firstName}</VerticalText>
                    <VerticalText isRed={true}>{language.lastName}</VerticalText>
                    <VerticalText>{language.job}</VerticalText>
                    <VerticalText>{language.location}</VerticalText>
                    <VerticalText><span onClick={() => goToPage("projects")}>{language.github}</span></VerticalText>
                    <VerticalText><span onClick={() => goToPage("about")}>{language.aboutMe}</span></VerticalText>
                    <VerticalText><span onClick={() => goToPage("resume")}>{language.resume}</span></VerticalText>
                    <VerticalText><span onClick={() => goToPage("contact")}>{language.email}</span></VerticalText>
                </div>
            </div>
        </section>
    );
}

export {
    LandingPageNew
}