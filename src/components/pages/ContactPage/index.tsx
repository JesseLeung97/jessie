import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import classes from "./styles.module.css";

const ContactPage = () => {
    const { language } = useLanguage();
    const [ location ] = useLocation();
    if(location !== "/contact") return null;

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={language.contactPage.title} />
                <form class={classes.form_container} action="https://formspree.io/f/xgeqndkb" method="POST">
                    <label>
                        <span>{language.contactPage.form.email}</span>
                        <input type="email" name="email" />
                    </label>
                    <label>
                        <span>{language.contactPage.form.message}</span>
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">{language.contactPage.form.submit}</button>
                </form>
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ContactPage
}