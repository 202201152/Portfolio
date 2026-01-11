import ProjectItem from '../UI/ProjectItem';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Financial Infrastructure',
        role: 'Lead Architect',
        year: '2025'
    },
    {
        id: 2,
        title: 'Autonomous Logistics',
        role: 'Interaction Design',
        year: '2024'
    },
    {
        id: 3,
        title: 'Nebula Design System',
        role: 'Core Maintainer',
        year: '2024'
    },
    {
        id: 4,
        title: 'Quant Trading Interface',
        role: 'Frontend Engineering',
        year: '2023'
    }
];

const Projects = () => {
    return (
        <section id="work" className="section-projects">
            <div className="container">
                <header className="projects-header">
                    <span className="section-label">01</span>
                    <h2 className="section-title">Selected Works</h2>
                </header>

                <div className="projects-list">
                    {projectsData.map((project) => (
                        <ProjectItem
                            key={project.id}
                            title={project.title}
                            role={project.role}
                            year={project.year}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
