import './Philosophy.css';

const Philosophy = () => {
    const technologies = [
        'React Ecosystem', 'TypeScript', 'Node.js',
        'WebGL / Three.js', 'System Architecture', 'UI Engineering'
    ];

    return (
        <section id="philosophy" className="section-philosophy">
            <div className="container">
                <div className="philosophy-grid">
                    {/* Left Column: Label */}
                    <div className="philosophy-label">
                        <span className="section-label">02</span>
                        <h2 className="section-title">Philosophy</h2>
                    </div>

                    {/* Right Column: Content */}
                    <div className="philosophy-content">
                        <div className="philosophy-text">
                            <h3 className="text-highlight">Depth before breadth.</h3>
                            <p>
                                In an era of rapid churn, I value the permanence of well-engineered systems.
                                Good code is quiet. It doesn't demand attention; it simply supports the user's intent with absolute reliability.
                            </p>
                            <p>
                                My approach is rooted in clarity—stripping away the superfluous to reveal the essential structure of a problem.
                                Whether building financial infrastructure or immersive interfaces, the goal is always the same:
                                <span className="text-white"> confidence.</span>
                            </p>
                        </div>

                        <div className="tech-stack">
                            <span className="tech-label">Technical Foundation</span>
                            <ul className="tech-list">
                                {technologies.map((tech) => (
                                    <li key={tech} className="tech-item">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
