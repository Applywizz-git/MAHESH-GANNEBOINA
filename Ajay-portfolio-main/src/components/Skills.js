
import React from 'react';
// Skills Component (Skills.js)

const Skills = () => {
    const skillsData = [
        {
            icon: "fas fa-code",
            color: "text-green-400",
            title: "Programming & ML",
            description: "Expertise in Python, PyTorch, Scikit-learn, and Hugging Face Transformers.",
            skills: [
                { name: "Python", percentage: 95 },
                { name: "PyTorch", percentage: 90 },
                { name: "Scikit-learn", percentage: 90 }
            ]
        },
        {
            icon: "fas fa-brain",
            color: "text-blue-400",
            title: "Generative AI",
            description: "Building RAG pipelines, LLM-driven agents, and semantic search solutions.",
            skills: [
                { name: "RAG", percentage: 95 },
                { name: "LangChain", percentage: 90 },
                { name: "GPT-4", percentage: 95 }
            ]
        },
        {
            icon: "fas fa-database",
            color: "text-purple-400",
            title: "Vector Databases",
            description: "Implementing vector search with Pinecone, FAISS, Weaviate, and ChromaDB.",
            skills: [
                { name: "Pinecone", percentage: 90 },
                { name: "FAISS", percentage: 85 },
                { name: "Weaviate", percentage: 80 }
            ]
        },
        {
            icon: "fas fa-cogs",
            color: "text-yellow-400",
            title: "Data Engineering",
            description: "Processing real-time data with Spark, Kafka, Airflow, and Databricks.",
            skills: [
                { name: "Spark/PySpark", percentage: 85 },
                { name: "Kafka", percentage: 80 },
                { name: "Databricks", percentage: 85 }
            ]
        },
        {
            icon: "fas fa-cloud",
            color: "text-indigo-400",
            title: "Cloud & MLOps",
            description: "Deploying ML models on AWS and Azure with Docker, Kubernetes, and Terraform.",
            skills: [
                { name: "AWS", percentage: 90 },
                { name: "Azure", percentage: 85 },
                { name: "Docker/K8s", percentage: 80 }
            ]
        },
        {
            icon: "fas fa-chart-line",
            color: "text-red-400",
            title: "Databases & BI",
            description: "Visualizing insights with Power BI, Tableau, and managing SQL/NoSQL databases.",
            skills: [
                { name: "SQL/NoSQL", percentage: 90 },
                { name: "Power BI", percentage: 85 },
                { name: "Tableau", percentage: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
                    <div className="section-divider mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Tools and technologies I've mastered through hands-on projects and professional experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-card p-8 rounded-2xl hover-glow">
                            <div className={`text-4xl ${skill.color} mb-4`}>
                                <i className={skill.icon}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                            <p className="text-gray-400 mb-6">{skill.description}</p>
                            <div className="space-y-3">
                                {skill.skills.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center">
                                            <span>{item.name}</span>
                                            <span className="text-green-400">{item.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;