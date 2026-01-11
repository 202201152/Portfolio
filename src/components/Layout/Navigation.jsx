import './Navigation.css';

const Navigation = () => {
    const navItems = [
        { label: 'Work', href: '#work' },
        { label: 'Philosophy', href: '#philosophy' },
        { label: 'Profile', href: '#profile' },
    ];

    return (
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
                    <button className="nav-contact-btn">Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
