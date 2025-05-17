import {useContext} from 'react';
import {Download, ChevronDown} from 'lucide-react';
import {ThemeContext} from '../context/ThemeContext';

const Hero = () => {
    const {theme} = useContext(ThemeContext);

    const scrollToProjects = () => {
        const element = document.querySelector('#skills');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div
            className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Animated background dots (light theme only) */}
            {theme === 'light' && (
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div
                        className="absolute w-full h-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                </div>
            )}

            <div className="container mx-auto px-6 lg:px-12 z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 animate-fadeIn">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="block">Hi, I'm</span>
                            <span className="text-blue-600 dark:text-blue-400">Satya Naraharisetty</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
                            Full Stack Developer
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg">
                            I'm a passionate developer with expertise in Java, Spring Boot, Python, Flask, and Node.js.
                            I create robust and scalable applications with clean, efficient code.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl font-medium text-lg flex items-center"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector('#projects');
                                    if (element) element.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                View My Work
                            </a>
                            <a href="/Satya_Resume.pdf"
                                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors shadow-lg hover:shadow-xl font-medium text-lg flex items-center"
                                download>
                                Resume <Download size={18} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slideInRight">
                        <div className="relative">
                            <div
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mx-auto overflow-hidden">
                                {/* Profile image placeholder */}
                                <div
                                    className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mx-auto overflow-hidden">
                                    <img
                                        src="/Satya_Picture.jpg"
                                        alt="Satya Naraharisetty"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-400 rounded-full z-[-1] opacity-50"></div>
                            <div
                                className="absolute -top-4 -left-4 w-24 h-24 bg-purple-400 rounded-full z-[-1] opacity-50"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button
                        onClick={scrollToProjects}
                        aria-label="Scroll down"
                        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <ChevronDown size={24} className="text-blue-600 dark:text-blue-400"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;