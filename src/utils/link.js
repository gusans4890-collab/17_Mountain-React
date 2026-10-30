import { ScrollTrigger } from "gsap/ScrollTrigger";

export const smoothScroll = (event, lenis) => {
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
    )
        return;
    const link = event.target.closest("a[href]");
    if (!link || link.target || link.origin !== window.location.origin) return;
    const hash = link.hash;
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));

    if (!target || link.pathname !== window.location.pathname || link.search !== window.location.search) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.getElementById("header");
    const portTrigger = ScrollTrigger.getById("mountain-ranges");
    const top =
        target.id === "port" && portTrigger
            ? portTrigger.start
            : target.getBoundingClientRect().top + window.scrollY - (header?.getBoundingClientRect().height || 0);
    if (lenis && !reduceMotion) lenis.scrollTo(Math.max(0, top));
    else window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "instant" : "smooth" });
    window.history.pushState(null, "", hash);
};
