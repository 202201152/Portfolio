import PropTypes from 'prop-types';
import './ProjectItem.css';

const ProjectItem = ({ title, role, year, description, tech, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-item group">
            <div className="project-content">
                <span className="project-year">{year}</span>
                <div className="project-info">
                    <h3 className="project-title">{title}</h3>
                    <div className="project-details">
                        <p className="project-description">{description}</p>
                        <div className="project-tech">
                            {tech.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <span className="project-role">{role}</span>
            </div>
            <div className="project-line" />
        </a>
    );
};

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string
};

export default ProjectItem;
