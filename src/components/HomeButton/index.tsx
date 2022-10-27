import classes from "./styles.module.css";

const HomeButton = () => {
    return (
        <div class={classes.button_container}>
            <a class={classes.home_button} href={`${window.location.origin}`}>Home</a>
        </div>
    );
}

export {
    HomeButton
}