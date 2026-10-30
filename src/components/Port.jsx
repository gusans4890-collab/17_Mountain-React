import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portText } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const Port = () => {
    const portRef = useRef(null);

    useLayoutEffect(() => {
        let active = true;
        const context = gsap.context(() => {
            const horizontal = portRef.current;
            const horsection = gsap.utils.toArray(".port_item");

            gsap.to(horsection, {
                xPercent: -100 * (horsection.length - 1),
                ease: "none",
                scrollTrigger: {
                    id: "mountain-ranges",
                    trigger: horizontal,
                    start: () => `top ${document.getElementById("header")?.getBoundingClientRect().height || 0}px`,
                    end: "+=3000",
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    markers: false,
                },
            });
        }, portRef);

        Promise.allSettled([
            document.fonts.ready,
            ...Array.from(document.images, (image) => image.decode()),
        ]).then(() => {
            if (active) ScrollTrigger.refresh();
        });

        return () => {
            active = false;
            context.revert();
        };
    }, []);
    return (
        <section id="port" ref={portRef}>
            <div className="port_inner">
                <div className="port_title">Mountain Ranges</div>
                <div className="port_wrap">
                    {portText.map((el, idx) => (
                        <article className={`port_item ${el.className}`} key={idx}>
                            <span className="num">{`${String(idx + 1).padStart(2, "0")}.`}</span>
                            <a className="img" href={el.site} target="_blank" rel="noopener noreferrer">
                                <img src={el.img} alt={el.title} />
                            </a>
                            <h1 className="title">{el.title}</h1>
                            <p className="desc">{el.desc}</p>
                            <a className="site" href={el.site}>
                                자세히보기
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;
