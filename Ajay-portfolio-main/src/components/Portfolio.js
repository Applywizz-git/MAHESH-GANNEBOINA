// Portfolio Component (Portfolio.js)

import React from 'react';


const Portfolio = () => {
    const projects = [
        {
            image: "images/project_analytics.png",
            title: "Enterprise Generative AI Analytics Assistant",
            description: "Built an enterprise analytics assistant by integrating GPT-4 with LangChain, FAISS, and Snowflake, allowing users to retrieve governed business data through natural-language queries.",
            tags: ["GPT-4", "LangChain", "Snowflake"],
            tagColors: ["text-green-400", "text-blue-400", "text-purple-400"]
        },
        {
            image: "images/project_finance.png",
            title: "AI-Driven Financial Forecasting Platform",
            description: "Developed interactive Power BI dashboards connected to Snowflake and SQL Server, providing leadership with continuously updated views of revenue, expense, and profitability trends.",
            tags: ["Power BI", "Snowflake", "SQL Server"],
            tagColors: ["text-yellow-400", "text-indigo-400", "text-blue-400"]
        },
        {
            image: "images/project_customer.png",
            title: "Generative AI Customer Insights Assistant",
            description: "Created a GPT-4-powered analytics agent with LangChain to analyze large-scale retail POS data, enabling identification of cross-sell and upsell patterns.",
            tags: ["GPT-4", "LangChain", "Pinecone"],
            tagColors: ["text-green-400", "text-red-400", "text-yellow-400"]
        }
    ];

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">My <span className="gradient-text">Portfolio</span></h2>
                    <div className="section-divider mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A showcase of impactful AI systems, machine learning applications, and analytics platforms
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-item rounded-2xl overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`px-3 py-1 bg-opacity-20 ${project.tagColors[tagIndex]} rounded-full text-sm`} style={{ backgroundColor: `rgba(${project.tagColors[tagIndex] === 'text-green-400' ? '0, 255, 136' : project.tagColors[tagIndex] === 'text-blue-400' ? '0, 212, 255' : project.tagColors[tagIndex] === 'text-purple-400' ? '168, 85, 247' : project.tagColors[tagIndex] === 'text-yellow-400' ? '250, 204, 21' : project.tagColors[tagIndex] === 'text-indigo-400' ? '129, 140, 248' : '248, 113, 113'}, 0.2)` }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button onClick={scrollToContact} className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
                        Ready to Collaborate
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;