import classes from "./styles.module.css";
import { useLocation } from "wouter/preact";

const WritingsPage = () => {
    const [location] = useLocation();
    if(location !== "/writings") return null;

    return (
        <section>Writing Page</section>
    );
}

export {
    WritingsPage
}