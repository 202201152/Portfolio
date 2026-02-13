import ProjectItem from '../UI/ProjectItem';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Durga Art Zone',
        role: 'Solo Full Stack Engineer',
        year: '2025',
        description: 'A production-grade, scalable jewelry e-commerce platform with RBAC, secure payments, and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Redux'],
        link: 'https://durga-art-zone-zyhq.vercel.app/',
        isLegacy: false
    },
    {
        id: 2,
        title: 'RedSignal',
        role: 'Full Stack Engineer',
        year: '2025',
        description: 'Real-time disaster alert and coordination platform featuring live maps, SOS broadcasting, and NGO resource management.',
        tech: ['MERN Stack', 'Socket.io', 'Leaflet Maps', 'Cloudinary'],
        link: 'https://github.com/202201152/RedSignal',
        isLegacy: false
    },
    {
        id: 3,
        title: 'iPhone 16 Pro',
        role: 'Creative Developer',
        year: '2025',
        description: 'Interactive 3D product showcase using Three.js and GSAP for cinematic animations and model rendering.',
        tech: ['React', 'Three.js', 'GSAP', 'Tailwind', 'Vite'],
        link: 'https://iphone-peach-two.vercel.app',
        isLegacy: false
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
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
