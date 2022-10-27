import classes from "./styles.module.css";
import { useLocation } from "wouter/preact";
import { useLanguage } from "../../LanguageManager";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { PageTitle } from "../../PageTitle";

const AboutPage = () => {
    const { language } = useLanguage();
    const [location] = useLocation();
    if(location !== "/about") return null;

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={language.aboutTitle} />
                <p class={classes.about_text_p}>{language.aboutContent}</p>
                
            </section>
            <HomeButton />
        </ContentWrapper>
    );
}

export {
    AboutPage
}