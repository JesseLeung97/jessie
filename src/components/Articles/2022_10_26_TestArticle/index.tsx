import classes from "./styles.module.css";
import { useLocation } from "wouter/preact";

const TestArticle = () => {
    const [location] = useLocation();
    if(location !== "/writings/article20221026") return null;

    return (
        <p>This is a test article</p>
    );
}

export {
    TestArticle
}