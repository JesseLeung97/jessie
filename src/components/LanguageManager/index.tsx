import { createContext, FunctionalComponent } from "preact";
import { useContext, useState, useLayoutEffect } from "preact/hooks";
import { en, jp } from "./translation";
import { TTranslation } from "./translation";

type THeadLanguages = "en" | "jp";
type TLanguageContext = { 
    headLanguage: THeadLanguages,
    language: TTranslation; 
    toggleLanguage: () => void 
};

const LanguageContext = createContext<TLanguageContext>(
    {} as TLanguageContext
);

const useLanguage = (): TLanguageContext => {
    return useContext(LanguageContext);
}

const LanguageManager: FunctionalComponent = ({ children }) => {
    const browserLanguage = navigator.language.substring(0, 2);
    const [headLanguage, setHeadLanguage] = useState<THeadLanguages>("en");
    const [language, setLanguage] = useState<TTranslation>(en);    

    const switchLanguage = () => {
        const headLanguage: THeadLanguages = language === en ? "jp" : "en";
        document.documentElement.lang = headLanguage;
        setLanguage(language === en ? jp : en);
        setHeadLanguage(headLanguage);
    }

    useLayoutEffect(() => {
        if(browserLanguage !== "en" && browserLanguage !== "jp") {
            setHeadLanguage("en");
            setLanguage(en);
        } else {
            const initialLanguage = browserLanguage as THeadLanguages;
            setHeadLanguage(initialLanguage);
            setLanguage(initialLanguage === "en" ? en : jp); 
        }
    }, [browserLanguage]);
    
    return (
        <LanguageContext.Provider value={{ headLanguage: headLanguage, language: language, toggleLanguage: switchLanguage }}>
            { children }
        </LanguageContext.Provider>
    );
}

export {
    LanguageManager,
    LanguageContext,
    useLanguage
}