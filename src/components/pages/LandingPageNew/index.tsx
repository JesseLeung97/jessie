import classes from "./styles.module.css";
import { TokyoScape } from "../../../assets/images/TokyoScape";
import { VerticalText } from "../../VerticalText";
import { useLocation } from "wouter/preact";
import { useLanguage } from "../../LanguageManager";
import { BostonScape } from "../../../assets/images/BostonScape";
import { usePageTransition } from "../../PageTransition";

const LandingPageNew = () => {
    const { language, headLanguage } = useLanguage();
    const { changePage } = usePageTransition();
    const [ location ] = useLocation();
    if (location !== "/") return null;

    return (
        <section class={classes.body_container}>
            <div class={classes.main_content_container}>
                <div class={classes.cityscape_container}>
                    <BostonScape className={`${classes.tokyo_scape} ${headLanguage === "jp" ? classes.tokyo_scape_hidden : ""}`}/>
                    <TokyoScape className={`${classes.tokyo_scape} ${headLanguage === "en" ? classes.tokyo_scape_hidden : ""} ${classes.tokyo_scape_dummy}`}/>
                    <TokyoScape className={`${classes.tokyo_scape_dummy}`}/>
                </div>
                <div class={classes.text_container}>
                    <VerticalText isRed={true} text={language.firstName} />
                    <VerticalText isRed={true} text={language.lastName} />
                    <VerticalText text={language.job} />
                    <VerticalText text={language.location} />
                    <VerticalText text={language.github} onClick={() => changePage("projects")} />
                    <VerticalText text={language.aboutMe} onClick={() => changePage("about")} />
                    <VerticalText text={language.resume} onClick={() => changePage("resume")} />
                    <VerticalText text={language.email} onClick={() => changePage("contact")} />
                </div>
            </div>
        </section>
    );
}

export {
    LandingPageNew
}
