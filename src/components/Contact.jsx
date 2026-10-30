import { contactText } from "../data/data";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact_inner">
                <h2 className="contact_title">{contactText.title}</h2>
                <div className="contact_lines">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                <div className="contact_text">
                    <div className="text">
                        {contactText.desc.map((item) => (
                            <div key={item.link}>
                                <a href={item.link}>{item.text}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact_lines bottom">
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

export default Contact;
