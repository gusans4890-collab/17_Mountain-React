import aboutImage from "../assets/img/about.jpg";
import { introText } from "../data/data";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_inner">
                <div className="intro_title">{introText.title}</div>
                <div className="intro_lines">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro_text">
                    <div className="text">
                        {introText.desc.map((desc, idx) => (
                            <div key={idx}>{desc}</div>
                        ))}
                    </div>
                    <div className="img">
                        <img src={aboutImage} alt="" />
                    </div>
                </div>
                <div className="intro_lines bottom">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
