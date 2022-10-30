import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import { useLocation } from "wouter/preact";
import { ContentWrapper } from "../../ContentWrapper";
import { HomeButton } from "../../HomeButton";
import { useLanguage } from "../../LanguageManager";
import { PageTitle } from "../../PageTitle";
import { ResumeSectionTitle } from "../../ResumeSectionTitle";
import classes from "./styles.module.css";

const ContactPage = () => {
    const MIN_TEXT_AREA_HEIGHT = 68;
    const { language } = useLanguage();
    const [ location ] = useLocation();
    const textArea = useRef<HTMLTextAreaElement>(null);
    const [textAreaValue, setTextAreaValue] = useState("");

    if(location !== "/contact") {
        setTextAreaValue("");
        return null;
    }

    useLayoutEffect(() => {
        if(textArea.current === null) return;

        textArea.current.style.height = "inherit";
        textArea.current.style.height = `${Math.max(
            textArea.current.scrollHeight,
            MIN_TEXT_AREA_HEIGHT
        )}px`;
    }, [textAreaValue]);

    return (
        <ContentWrapper>
            <section>
                <PageTitle title={language.contactPage.title} />
                <p>
                    {language.contactPage.subtitle.part_1}
                    <a class={classes.contact_link} target="_blank" href={language.contactPage.links.linkedIn.link}>{language.contactPage.links.linkedIn.name}</a>
                    {language.contactPage.subtitle.part_2}
                    <a class={classes.contact_link} target="_blank" href={language.contactPage.links.github.link}>{language.contactPage.links.github.name}</a>
                    {language.contactPage.subtitle.part_3}
                </p>
                <form class={classes.form_container} action="https://formspree.io/f/xgeqndkb" method="POST">
                    <label>
                        <ResumeSectionTitle title={language.contactPage.form.email} />
                        <input class={classes.input} type="email" name="email" />
                    </label>
                    <label>
                    <ResumeSectionTitle title={language.contactPage.form.message} />
                        <textarea class={classes.text_area} ref={textArea} value={textAreaValue} onInput={e => setTextAreaValue((e.target as HTMLTextAreaElement).value)} name="message"></textarea>
                    </label>
                    <div class={classes.submit_container}>
                        <button type="submit">{language.contactPage.form.submit}</button>
                    </div>
                </form>
                <HomeButton />
            </section>
        </ContentWrapper>
    );
}

export {
    ContactPage
}