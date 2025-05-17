import {useState} from 'react';
import {Send, Mail, Phone, MapPin, Linkedin, Github, Twitter} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('idle');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormData({name: '', email: '', message: ''});

            // Reset status after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                                formStatus === 'sending'
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        >
                            {formStatus === 'sending' ? (
                                <>Sending...</>
                            ) : (
                                <>
                                    Send Message <Send size={18} className="ml-2"/>
                                </>
                            )}
                        </button>

                        {formStatus === 'success' && (
                            <div
                                className="p-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-lg mt-4">
                                Your message has been sent successfully!
                            </div>
                        )}

                        {formStatus === 'error' && (
                            <div
                                className="p-3 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-lg mt-4">
                                There was an error sending your message. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div
                                className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                                <Mail size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Email</h4>
                                <a href="mailto:venkatnaraharisetty1234@gmail.com"
                                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    venkatnaraharisetty1234@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div
                                className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                                <Phone size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Phone</h4>
                                <a href="tel:+1234567890"
                                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    +91 77020 14320
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div
                                className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                                <MapPin size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Location</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Andhra Pradesh, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Satya-Naraharisetty"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
                                aria-label="GitHub Profile"
                            >
                                <Github size={20}/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/venkatnaraharisetty/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={20}/>
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
                                aria-label="Twitter Profile"
                            >
                                <Twitter size={20}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;