import {useState} from 'react';
import {projectsData} from '../data/projectsData.jsx';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    // Get unique categories from projects
    const categories = ['all', ...new Set(projectsData.flatMap(project => project.technologies))];

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.technologies.includes(filter));

    return (
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on. Each project showcases different skills and
                    technologies.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.slice(0, 6).map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            filter === category
                                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;