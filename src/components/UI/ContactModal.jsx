import { useEffect, useRef } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div
                className="contact-modal-content"
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="contact-close-btn" onClick={onClose}>&times;</button>

                <div className="contact-header">
                    <h3 className="contact-title">Let's Connect</h3>
                    <p className="contact-subtitle">Open for collaborations and new opportunities.</p>
                </div>

                <div className="contact-links">
                    <a href="mailto:raganpatel648@gmail.com" className="contact-link-item">
                        <span className="contact-label">Email</span>
                        <span className="contact-value">raganpatel648@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                        <span className="contact-label">LinkedIn</span>
                        <span className="contact-value">linkedin.com/in/profile</span>
                    </a>
                    <a href="https://github.com/202201152" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                        <span className="contact-label">GitHub</span>
                        <span className="contact-value">github.com/202201152</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
