import PropTypes from 'prop-types';
import './ProjectItem.css';

const ProjectItem = ({ title, role, year, onClick }) => {
    return (
        <div className="project-item" onClick={onClick}>
            <div className="project-content">
                <span className="project-year">{year}</span>
                <h3 className="project-title">{title}</h3>
                <span className="project-role">{role}</span>
            </div>
            <div className="project-line" />
        </div>
    );
};

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ProjectItem;
