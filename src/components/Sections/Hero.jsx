import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const titleRef = useRef(null);
    const subtextRef = useRef(null);

    useEffect(() => {
        // Simple delay staggering for entrance
        const title = titleRef.current;
        const subtext = subtextRef.current;

        if (title) {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }

        if (subtext) {
            setTimeout(() => {
                subtext.style.opacity = '1';
                subtext.style.transform = 'translateY(0)';
            }, 200);
        }
    }, []);

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 ref={titleRef} className="hero-title text-gradient">
                        Systems over<br />spectacle.
                    </h1>
                    <p ref={subtextRef} className="hero-subtext">
                        Building reliable digital infrastructure for the modern web.<br />
                        Depth, clarity, and performance.
                    </p>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
