// Hero Component (Hero.js)
import React from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = React.useState('');
    const fullText = "Hi, I'm Mahesh Ganneboina";

    React.useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 1000);
    }, []);

    const scrollToPortfolio = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className=" section-driver order-2 lg:order-1">
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                            {displayText.split('Mahesh Ganneboina').map((part, index) =>
                                index === 0 ? part :
                                    <span key={index}><span className="gradient-text">Mahesh Ganneboina</span></span>
                            )}
                        </h2>
                        <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6">
                            Machine Learning and Generative AI Engineer
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Machine Learning and Generative AI Engineer with 5+ years of experience delivering production-grade ML, analytics, and decision intelligence platforms.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={scrollToPortfolio} className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
                                View My Work
                            </button>
                            <a href="RESME_MAHESH_GANNEBOINA.pdf" download>
                                <button className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:border-green-400 transition-all duration-300">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative">
                            <div className="w-80 h-120 rounded-full overflow-hidden neon-border animate-pulse-glow">
                                <img src="images/profile_avatar.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full animate-float opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;