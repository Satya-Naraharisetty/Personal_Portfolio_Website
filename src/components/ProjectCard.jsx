import {useState} from 'react';
import {ExternalLink, Github} from 'lucide-react';

const ProjectCard = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden h-48">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                    style={{
                        backgroundImage: `url(${project.image})`,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 rounded-full bg-blue-600/80 text-white"
                                >
                  {tech}
                </span>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="text-xs px-2 py-1 rounded-full bg-gray-600/80 text-white">
                  +{project.technologies.length - 3}
                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex justify-between">
                    <div className="flex space-x-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                aria-label="View source code on GitHub"
                            >
                                <Github size={20}/>
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                aria-label="View live demo"
                            >
                                <ExternalLink size={20}/>
                            </a>
                        )}
                    </div>

                    <button
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                        onClick={() => window.open(project.demo || project.github, '_blank')}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;