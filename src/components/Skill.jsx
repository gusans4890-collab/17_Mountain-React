import { skillText } from "../data/data";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill_inner">
                <div className="skill_title">My Climb</div>
                <div className="skill_decs">
                    {skillText.map((skill, index) => (
                        <div key={index}>
                            <span>{index + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
