import { TokyoScape } from "../../../assets/images/TokyoScape";
import { VerticalText } from "../../VerticalText";
import classes from "./styles.module.css";
import { useLocation } from "wouter/preact";
import { useLanguage } from "../../LanguageManager";

const LandingPageNew = () => {
    const { language } = useLanguage();
    const [location] = useLocation();
    if (location !== "/") return null;

    const goToPage = (pageName: string) => {
        window.location.pathname = `/${pageName}`;
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
                    <VerticalText><a href="https://github.com/JesseLeung97" target="_blank">{language.github}</a></VerticalText>
                    <VerticalText><a href={`${window.location}about`}>{language.aboutMe}</a></VerticalText>
                    <VerticalText><a href="../../../JesseLeung_Resume_2022.pdf" target="_blank">{language.resume}</a></VerticalText>
                    <VerticalText><a href="mailto:jessetleung@gmail.com" target="_blank">{language.email}</a></VerticalText>
                </div>
            </div>
        </section>
    );
}

export {
    LandingPageNew
}