import english from "../../translations/en.json";
import japanese from "../../translations/jp.json";

export type TTranslation = {
    siteTitle: string,
    changeLanguage: string,
    year: string,
    firstName: string,
    lastName: string,
    job: string,
    location: string,
    github: string,
    resume: string,
    aboutMe: string,
    email: string,
    aboutTitle: string,
    aboutContent: string[],
    resumePage: {
        summary: string,
        experience: {
            title: string,
            jobTitle: string,
            companyName: string,
            date: string,
            techStackTitle: string,
            projects: {
                title: string,
                descriptions: [
                    {
                        title: string,
                        bullets: string[],
                        techStack: string
                    }
                ]
            }
        },
        education: string,
        technicalSkills: string,
        personalProjects: string
    }
}  

const en = english as TTranslation;
const jp = japanese as TTranslation;

export {
    en,
    jp
}