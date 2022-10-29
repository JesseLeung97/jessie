import classes from "./styles.module.css";

const HomeButton = () => {

    const goHome = () => {
        window.history.pushState({}, "", `/`);
    }

    return (
        <div class={classes.button_container}>
            <span class={classes.home_button} onClick={() => goHome()}>Home</span>
        </div>
    );
}

export {
    HomeButton
}