import { useState } from 'react';
import ContactModal from '../UI/ContactModal';
import './Navigation.css';

const Navigation = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const navItems = [
        { label: 'Work', href: '#work' },
        { label: 'Philosophy', href: '#philosophy' },
    ];

    return (
        <>
            <header className="nav-header">
                <div className="container nav-container">
                    <a href="/" className="nav-logo">
                        Portfolio<span className="dot">.</span>
                    </a>

                    <nav className="nav-links">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="nav-item">
                                {item.label}
                            </a>
                        ))}
                        <button
                            className="nav-contact-btn"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </header>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
};

export default Navigation;
