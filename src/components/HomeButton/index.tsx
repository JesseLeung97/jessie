import { useLanguage } from "../LanguageManager";
import { usePageTransition } from "../PageTransition";
import classes from "./styles.module.css";

const HomeButton = () => {
    const { language } = useLanguage();
    const { changePage } = usePageTransition();

    return (
        <div class={classes.button_container}>
            <span class={classes.home_button} onClick={() => changePage("")}>{language.homePage.title}</span>
        </div>
    );
}

export {
    HomeButton
}