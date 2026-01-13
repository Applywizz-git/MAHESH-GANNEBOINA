import React from 'react';

const Header = () => {
            const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

            const scrollToSection = (sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setMobileMenuOpen(false);
            };

            return (
                <section id="header">
                <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="text-2xl font-bold gradient-text">Portfolio</div>
                            <div className="hidden md:flex space-x-8">
                                <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                                <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                                <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                                <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
                                <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                            </div>
                            <div className="md:hidden">
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                                    <i className="fas fa-bars text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {mobileMenuOpen && (
                        <div className="md:hidden bg-black border-t border-gray-800">
                            <div className="px-4 py-2 space-y-2">
                                <button onClick={() => scrollToSection('home')} className="block py-2 nav-link">Home</button>
                                <button onClick={() => scrollToSection('about')} className="block py-2 nav-link">About</button>
                                <button onClick={() => scrollToSection('skills')} className="block py-2 nav-link">Skills</button>
                                <button onClick={() => scrollToSection('portfolio')} className="block py-2 nav-link">Portfolio</button>
                                <button onClick={() => scrollToSection('contact')} className="block py-2 nav-link">Contact</button>
                            </div>
                        </div>
                    )}
                </nav>
                </section>
            );
        };

export default Header;