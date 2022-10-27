import { useLanguage } from "../LanguageManager";
import classes from "./styles.module.css";

const LanguageToggle = () => {
    const { toggleLanguage, language } = useLanguage();

    return (
        <div class={classes.language_toggle_container}>
            <span onClick={() => toggleLanguage()} class={classes.language_toggle}>{language.changeLanguage}</span>
        </div>
    );
}

export {
    LanguageToggle
}