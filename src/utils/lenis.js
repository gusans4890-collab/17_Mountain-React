import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const setupLenis = (lenisRef) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis;
    let tick;

    const stopLenis = () => {
        if (!lenis) return;
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenisRef.current = null;
        lenis = null;
    };

    const updateMotion = () => {
        stopLenis();
        if (!reducedMotion.matches) {
            lenis = new Lenis();
            lenisRef.current = lenis;
            lenis.on("scroll", ScrollTrigger.update);
            lenis.on("scroll", (event) => console.log(event));
            tick = (time) => lenis.raf(time * 1000);
            gsap.ticker.add(tick);
        }
    };

    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
    return () => {
        reducedMotion.removeEventListener("change", updateMotion);
        stopLenis();
    };
};
