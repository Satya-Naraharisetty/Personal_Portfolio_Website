import {Heart} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            Portfolio
                        </a>
                    </div>

                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex items-center justify-center">
                            <span className="text-gray-600 dark:text-gray-400">Made with consistent</span>
                            <Heart size={16} className="mx-1 text-red-500 fill-current"/>
                            <span className="text-gray-600 dark:text-gray-400">& effort</span>
                            <span className="text-gray-600 dark:text-gray-400">, using React & Tailwind CSS</span>
                        </div>
                    </div>

                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                        © {currentYear} Satya. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;