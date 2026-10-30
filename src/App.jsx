import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { smoothScroll } from "./utils/link";
import { setupLenis } from "./utils/lenis";
import HomeView from "./views/HomeView";
import CardView from "./views/CardView";
import PortView from "./views/PortView";

const App = () => {
    const [atBottom, setAtBottom] = useState(false);
    const [movingUp, setMovingUp] = useState(false);
    const timerRef = useRef(null);
    const lenisRef = useRef(null);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    useEffect(() => {
        const cleanupLenis = setupLenis(lenisRef);
        const handleClick = (event) => smoothScroll(event, lenisRef.current);
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
            cleanupLenis();
        };
    }, []);

    useEffect(() => {
        const updateButton = () => {
            const root = document.documentElement;
            setAtBottom(root.scrollHeight > window.innerHeight && window.scrollY + window.innerHeight >= root.scrollHeight - 2);
        };
        window.addEventListener("scroll", updateButton, { passive: true });
        window.addEventListener("resize", updateButton);
        updateButton();
        return () => {
            window.removeEventListener("scroll", updateButton);
            window.removeEventListener("resize", updateButton);
        };
    }, []);

    const scrollToTop = () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
            window.scrollTo({ top: 0, behavior: "instant" });
            return;
        }
        setMovingUp(true);
        timerRef.current = setTimeout(() => {
            if (lenisRef.current) lenisRef.current.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: "smooth" });
            setMovingUp(false);
        }, 500);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/card" element={<CardView />} />
                <Route path="/port" element={<PortView />} />
            </Routes>
            {atBottom && (
                <button className={`back_to_top${movingUp ? " moving" : ""}`} type="button" onClick={scrollToTop} disabled={movingUp} aria-label="맨 위로 이동">
                    <svg className="back_to_top_arrow" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                        <path d="M12 20V4M6 10l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </BrowserRouter>
    );
};

export default App;
