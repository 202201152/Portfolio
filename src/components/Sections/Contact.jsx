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

                    <a href="mailto:raganpatel648@gmail.com" className="contact-email">
                        raganpatel648@gmail.com
                    </a>
                </div>

                <footer className="footer-bar">
                    <span className="copyright">© {currentYear} Portfolio</span>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/ragan-patel-833252285/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/202201152" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
