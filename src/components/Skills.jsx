import {useState} from 'react';
import {Code, Database, Server, Globe} from 'lucide-react';
import {skillsData} from '../data/skillsData.jsx';
import SkillBar from './SkillBar';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        {id: 'all', name: 'All', icon: <Code size={20}/>},
        {id: 'frontend', name: 'Frontend', icon: <Globe size={20}/>},
        {id: 'backend', name: 'Backend', icon: <Server size={20}/>},
        {id: 'database', name: 'Database', icon: <Database size={20}/>},
    ];

    const filteredSkills = activeCategory === 'all'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeCategory);

    return (
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    I've worked with a variety of technologies and frameworks. Here's a summary of my technical
                    expertise.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center px-5 py-2 rounded-full font-medium transition-all ${
                            activeCategory === category.id
                                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {filteredSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            <div
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                        </div>
                        <SkillBar level={skill.level}/>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;