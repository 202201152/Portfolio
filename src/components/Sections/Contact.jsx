import './Contact.css';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section id="contact" className="section-contact">
            <div className="container contact-container">
                <div className="contact-content">
                    <p className="contact-prefix">What's next?</p>
                    <h2 className="contact-headline">
                        Let's build something<br />
                        <span className="text-white">reliable.</span>
                    </h2>

                    <a href="mailto:hello@example.com" className="contact-email">
                        hello@example.com
                    </a>
                </div>

                <footer className="footer-bar">
                    <span className="copyright">© {currentYear} Portfolio</span>

                    <div className="social-links">
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">Twitter</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
