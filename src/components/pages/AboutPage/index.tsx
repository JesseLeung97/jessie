import classes from "./styles.module.css";
import { useLocation } from "wouter/preact";
import { useLanguage } from "../../LanguageManager";

const AboutPage = () => {
    const { language } = useLanguage();
    const [location] = useLocation();
    if(location !== "/about") return null;
    
    console.log("We're here");

    return (
        <>
        <section>{language.aboutContent}</section>
        <a href={`${window.location.origin}`}>Home</a>
        </>
    );
}

export {
    AboutPage
}