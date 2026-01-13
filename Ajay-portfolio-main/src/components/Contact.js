// Contact Component (Contact.js)


import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="section-divider mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project or opportunity in mind? Let's connect and build something impactful.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-envelope text-green-400"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-400">Maheshganneboina3777@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-phone text-blue-400"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-gray-400">+1 (813) 360-7716</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-map-marker-alt text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-gray-400">Clermont, FL</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/mahesh-gannebo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                        placeholder="Your First Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                        placeholder="Your Last Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                    placeholder="Let's work together on..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none resize-none"
                                    placeholder="Describe your project or query..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;