import { siteText } from "../data/data";

const Site = () => {
    return (
        <section id="site">
            <div className="site_inner">
                <h2 className="site_title">Great Mountains</h2>
                <div className="site_wrap">
                    {siteText.map((site, idx) => (
                        <article className={`site_item ${site.className}`} key={site.className}>
                            <span className="num">{idx + 1}.</span>
                            <div className="text">
                                {site.text.map((text) => (
                                    <div key={text}>{text}</div>
                                ))}
                            </div>
                            <h3 className="title">{site.title}</h3>
                            <div className="btn">
                                <a href={site.site}>SITE</a>
                                <a href={site.view}>VIEW</a>
                            </div>
                            <div className="info">
                                {site.info.map((info) => (
                                    <span key={info}>{info}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;
