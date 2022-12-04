import classes from "./styles.module.css";
import { createContext, FunctionalComponent } from "preact";
import { Ref, useContext, useRef } from "preact/hooks";

type TPageTransitionContext = { 
    changePage: (toPage: string) => void
};

const PageTransitionContext = createContext<TPageTransitionContext>(
    {} as TPageTransitionContext
);

const usePageTransition = (): TPageTransitionContext => {
    return useContext(PageTransitionContext);
}

const PageTransition: FunctionalComponent = ({
    children
}) => {
    const blockerRef = useRef<HTMLDivElement>(null);

    const goHome = () => {
        window.history.pushState({}, "", `/`);
    }

    const goToPage = (pageName: string) => {
        const startTime = new Date().getTime();
        const loop = () => {
            const deltaTime = new Date().getTime() - startTime;
    
            if (deltaTime < 300) {
                requestAnimationFrame(loop);
            } else {
                window.history.pushState({}, "", `/${pageName}`);
                blockerRef.current?.classList.remove(classes.transition_blocker_visible);
            }
        }

        blockerRef.current?.classList.add(classes.transition_blocker_visible);
        loop();
    }

    return (
        <PageTransitionContext.Provider value={{ changePage: goToPage }}>
            <div class={classes.transition_blocker} ref={blockerRef} />
            { children }
        </PageTransitionContext.Provider>
    );
}

export {
    PageTransition,
    usePageTransition
}