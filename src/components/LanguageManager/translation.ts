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
                        techStack: string[]
                    }
                ]
            }
        },
        education: {
            title: string,
            schools: [
                {
                    schoolName: string,
                    degree: string,
                    minor: string,
                    date: string,
                    bullets: string[]
                }
            ]
        },
        technicalSkills: {
            title: string,
            skills: [
                {
                    skillName: string,
                    skills: string[]
                }
            ]
        },
        personalProjects: {
            title: string,
            descriptions: [
                {
                    title: string,
                    link: string,
                    bullets: string[],
                    techStack: string[]
                }
            ]
        }
    },
    projectsPage: {
        summary: string,
        personal: {
            title: string,
            descriptions: [
                {
                    title: string,
                    link: string,
                    bullets: string[],
                    techStack: string[]
                }
            ]
        },
        work: {
            title: string,
            descriptions: [
                {
                    title: string,
                    bullets: string[],
                    techStack: string[]
                }
            ]
        } 
    },
    contactPage: {
        title: string,
        form: {
            email: string,
            message: string,
            submit: string
        }
    }
}  

const en = english as TTranslation;
const jp = japanese as TTranslation;

export {
    en,
    jp
}