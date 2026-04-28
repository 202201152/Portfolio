import LogoLoop from '../UI/LogoLoop';
import {
    SiReact, SiNodedotjs, SiNextdotjs, SiThreedotjs,
    SiTypescript, SiJavascript, SiGreensock,
    SiDocker, SiFramer, SiStripe, SiRazorpay, SiGithub
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbVectorSpline } from 'react-icons/tb';
import './Philosophy.css';

const techLogos = [
    { node: <SiReact />, title: 'React' },
    { node: <SiNodedotjs />, title: 'Node.js' },
    { node: <SiNextdotjs />, title: 'Next.js' },
    { node: <SiThreedotjs />, title: 'Three.js' },
    { node: <SiTypescript />, title: 'TypeScript' },
    { node: <SiJavascript />, title: 'JavaScript' },
    { node: <SiGreensock />, title: 'GSAP' },
    { node: <FaAws />, title: 'AWS' },
    { node: <SiDocker />, title: 'Docker' },
    { node: <SiFramer />, title: 'Framer' },
    { node: <TbVectorSpline />, title: 'Spline' },
    { node: <SiStripe />, title: 'Stripe' },
    { node: <SiRazorpay />, title: 'Razorpay' },
    { node: <SiGithub />, title: 'GitHub' },
];

const Philosophy = () => {
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
                                My approach is rooted in clarity stripping away the superfluous to reveal the essential structure of a problem.
                                Whether building financial infrastructure or immersive interfaces, the goal is always the same:
                                <span className="text-white"> confidence.</span>
                            </p>
                        </div>

                        <div className="tech-stack">
                            <span className="tech-label">Technical Foundation</span>
                            <div className="tech-loop-wrapper">
                                <LogoLoop
                                    logos={techLogos}
                                    speed={80}
                                    direction="left"
                                    logoHeight={32}
                                    gap={48}
                                    hoverSpeed={0}
                                    scaleOnHover
                                    fadeOut
                                    fadeOutColor="#050505"
                                    ariaLabel="Technical skills"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
