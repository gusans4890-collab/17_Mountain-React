import { useEffect, useRef, useState } from "react";
import { header } from "../data/data";

const Header = () => {
    const [show, setShow] = useState(false);
    const headerRef = useRef(null);
    useEffect(() => {
        const element = headerRef.current;
        const updateHeight = () => {
            document.documentElement.style.setProperty("--header-height", `${element.getBoundingClientRect().height}px`);
        };
        const observer = new ResizeObserver(updateHeight);
        observer.observe(element);
        updateHeight();
        return () => observer.disconnect();
    }, []);
    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <header id="header" ref={headerRef}>
            <div className="header_inner">
                <div className="header_logo">
                    <h1>
                        <a href="/#intro">
                            Mountains <em>react</em>
                        </a>
                    </h1>
                </div>

                <div id="headerNav" className={`header_nav${show ? " show" : ""}`}>
                    <ul>
                        {header.map((menu) => (
                            <li key={menu.Link}>
                                <a href={menu.Link} onClick={() => setShow(false)}>
                                    {menu.menu}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button id="headerToggle" className="header_nav_mobile" type="button" onClick={toggleMenu} aria-expanded={show} aria-controls="headerNav" aria-label={show ? "메뉴 닫기" : "메뉴 열기"}>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
