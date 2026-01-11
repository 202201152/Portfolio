import { useEffect, useRef } from 'react';
import './cinematic.css';

const CinematicBackground = () => {
    // Use refs for animation values to avoid re-renders
    const mouse = useRef({ x: 0, y: 0 });
    const smoothed = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize (-1 to 1) for easier calculation
            mouse.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            };
        };

        // Idle behavior: If mouse leaves or stops (optional enhancement), 
        // physics will naturally dampen handled by the lerp below.

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const animate = () => {
            // Linear Interpolation (Lerp) for dampening
            // The lower the factor (0.001 - 1), the slower/heavier the movement
            const ease = 0.03; // Very heavy, slow "underwater" feel

            smoothed.current.x += (mouse.current.x - smoothed.current.x) * ease;
            smoothed.current.y += (mouse.current.y - smoothed.current.y) * ease;

            // Update CSS variables efficiently
            document.body.style.setProperty('--mouse-x', smoothed.current.x);
            document.body.style.setProperty('--mouse-y', smoothed.current.y);

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            // Clean up styles
            document.body.style.removeProperty('--mouse-x');
            document.body.style.removeProperty('--mouse-y');
        };
    }, []);

    return (
        <div className="cinematic-container" aria-hidden="true">
            <div className="noise-overlay" />

            {/* Deep atmosphere layer */}
            <div className="atmosphere-layer layer-deep" />

            {/* Subtle lighting accents */}
            <div className="glow-spot spot-top-left" />
            <div className="glow-spot spot-bottom-right" />
        </div>
    );
};

export default CinematicBackground;
