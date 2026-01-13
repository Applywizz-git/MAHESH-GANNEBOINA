import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
 const certificationSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024, // Tablets and smaller
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // Mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Machine Learning and Generative AI Engineer with 5+ years of experience delivering production-grade ML, analytics, and decision intelligence platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-700">
              <img src="images/profile_avatar.png" alt="About Me" className="w-full h-full object-fill" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Bridging AI Innovation with Business Value</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm Mahesh Ganneboina, a Machine Learning and Generative AI Engineer. I specialize in designing and deploying RAG pipelines, LLM-driven analytics agents, and semantic search solutions using LangChain, GPT-4, vector databases, Snowflake, Databricks, and cloud-native MLOps on AWS and Azure.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I have a strong background in real-time data processing, risk and fraud analytics, feature engineering, and model lifecycle management, with a proven ability to translate complex data into actionable insights for claims, underwriting, and executive decision-making.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">5+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">3</h4>
                <p className="text-gray-400">Major Projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">6+</h4>
                <p className="text-gray-400">Certifications</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">100%</h4>
                <p className="text-gray-400">Commitment to AI Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 mt-20">
          <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            Edu<span className="gradient-text">cation</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1">Masters in Computer Science & Information Systems</h4>
              <p className="text-gray-400">Saint Leo University, Tampa, FL, USA</p>
              <p className="text-gray-500 text-sm mt-1">Jan 2022 - May 2024</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1">Bachelors in Computer Science</h4>
              <p className="text-gray-400">Sabarmati University, Ahmedabad, Gujarat, India</p>
              <p className="text-gray-500 text-sm mt-1">Sep 2014 - Aug 2017</p>
            </div>
          </div>
        </div>

<div className="mb-16 mt-20">
  <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
    Certifi<span className="gradient-text">cations</span>
  </h3>
  <Slider {...certificationSettings}>
    {[
      {
        title: "Generative AI with Large Language Models",
        provider: "Coursera",
      },
      {
        title: "Machine Learning Specialization",
        provider: "Coursera",
      },
      {
        title: "IBM AI Engineering Professional Certificate",
        provider: "Coursera",
      },
      {
        title: "AWS Generative AI Essentials",
        provider: "Coursera",
      },
      {
        title: "Databricks Generative AI Fundamentals",
        provider: "Databricks Academy",
      },
      {
        title: "Applied Data Science with Python",
        provider: "Coursera",
      },
    ].map((cert, index) => (
  <div className="px-1" key={index}> {/* Was px-4 before */}
<div className="w-72 h-72 mx-auto bg-gray-800 p-6 flex flex-col justify-center items-center text-center rounded-full border border-transparent bg-clip-padding hover:shadow-lg transition duration-300"
     style={{ borderImage: "linear-gradient(135deg, #00ff88, #00d4ff) 1", borderWidth: "1px", borderStyle: "solid"}}>
<span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full mb-2">Certified</span>
      <h4 className="text-xl font-semibold text-white mb-2">{cert.title}</h4>
      <p className="text-gray-400">{cert.provider}</p>
    </div>
  </div>
))}

  </Slider>
</div>

        
        {/* Experience Carousel */}
        <div className="mb-16 mt-20">
          <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            Ex<span className="gradient-text">perience</span>
          </h3>
          {/* <Slider {...experienceSettings}> */}
                    <div className="grid md:grid-cols-2 gap-8">

            <div className="px-4">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition text-center">
                <h4 className="text-xl font-semibold text-white mb-1">AI & Machine Learning Engineer</h4>
                <p className="text-gray-400">Liberty Mutual Insurance | Florida, USA</p>
                <p className="text-gray-500 text-sm mt-1">Aug 2024 - Present</p>
                <p className="text-gray-400 mt-4">Built production-grade Generative AI claims intelligence platform using LangChain, GPT-4, Pinecone, AWS Kinesis, and Snowflake.</p>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition text-center">
                <h4 className="text-xl font-semibold text-white mb-1">Data Scientist - Machine Learning</h4>
                <p className="text-gray-400">Cognizant Technology Solutions | India</p>
                <p className="text-gray-500 text-sm mt-1">Sep 2018 - Oct 2021</p>
                <p className="text-gray-400 mt-4">Delivered high-throughput financial analytics by building Kafka, Spark Streaming, and Flink pipelines that processed 5+ TB of trading data daily.</p>
              </div>
            </div>
            </div>
          {/* </Slider> */}
        </div>




        {/* Certifications */}
        {/* <div className="mb-16 mt-20">
          <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1">Java Full Stack Development</h4>
              <p className="text-gray-400">Java Full Stack Development</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1">Internet of Things Fundamentals</h4>
              <p className="text-gray-400">APSSDC</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1">Introduction to Front-End Development</h4>
              <p className="text-gray-400">Great Learning</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1">Foundations of Artificial Intelligence</h4>
              <p className="text-gray-400">SkillUp</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;



// import React from 'react';

// const About = () => {
//             return (
//                 <section id="about" className="py-20 bg-gray-900">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl lg:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
//                             <div className="section-divider mx-auto mb-8"></div>
//                             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//                                 Passionate full stack Java developer with a strong foundation in scalable systems and cloud-native design
//                             </p>
//                         </div>
                        
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                             <div>
//                                 <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-700">
//                                     <img src="images/cicd_2.jpg" alt="About Me" className="w-full h-full object-fill" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-3xl font-bold mb-6">Bridging Backend Logic with Frontend Precision</h3>
//                                 <p className="text-gray-400 mb-6 leading-relaxed">
//                                     I'm Ajaykumar Reddy Devarapalli, a full stack developer skilled in Java, Spring Boot, React.js, and MySQL. I specialize in building RESTful APIs, microservices, and deploying cloud-native apps using AWS, Docker, and CI/CD pipelines. My academic journey at Lamar University and JNTU Hyderabad supports my industry-ready, real-world development experience.
//                                 </p>
//                                 <p className="text-gray-400 mb-8 leading-relaxed">
//                                     I optimize data pipelines and build ML solutions with performance, automation, and reusability in mind—leveraging GitHub Actions, Jenkins, and JIRA within Agile workflows to ship reliable code.
//                                 </p>
                                
//                                 <div className="grid grid-cols-2 gap-6">
//                                     <div>
//                                         <h4 className="text-2xl font-bold gradient-text mb-2">4+</h4>
//                                         <p className="text-gray-400">Major Projects Built</p>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-2xl font-bold gradient-text mb-2">2</h4>
//                                         <p className="text-gray-400">Technical Internships</p>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-2xl font-bold gradient-text mb-2">7+</h4>
//                                         <p className="text-gray-400">Core Certifications</p>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-2xl font-bold gradient-text mb-2">100%</h4>
//                                         <p className="text-gray-400">Commitment to Clean Code</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
// <br></br><br></br><br></br>
//                          <div className="mb-16">
//       <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8"><span className="gradient-text">Education</span></h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Master of Science in Computer Science</h4>
//           <p className="text-gray-400">Lamar University, Texas</p>
//           <p className="text-gray-500 text-sm mt-1">2022 – 2024</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//       </div>
//     </div>

// <div className="mb-16">
//       <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8"><span className="gradient-text">Experience</span></h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Master of Science in Computer Science</h4>
//           <p className="text-gray-400">Lamar University, Texas</p>
//           <p className="text-gray-500 text-sm mt-1">2022 – 2024</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//       </div>
//     </div>

//     <div className="mb-16">
//       <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8"><span className="gradient-text">Certifications</span></h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Master of Science in Computer Science</h4>
//           <p className="text-gray-400">Lamar University, Texas</p>
//           <p className="text-gray-500 text-sm mt-1">2022 – 2024</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
//           <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Technology in ECE</h4>
//           <p className="text-gray-400">JNTU Hyderabad, India</p>
//           <p className="text-gray-500 text-sm mt-1">2017 – 2021</p>
//         </div>
//       </div>
//     </div>
                        
//         </div>
                    
//                 </section>
//             );
//         };

// export default About;

//------------------------------below one is not correct------------------------------

// // components/About.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import { FaCode, FaDatabase, FaGlobe, FaBolt } from 'react-icons/fa'; // Lucide alt: use react-icons

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     {
//       icon: <FaCode className="about-icon" />,
//       title: "Frontend Development",
//       description: "Building responsive and interactive user interfaces using React.js",
//     },
//     {
//       icon: <FaDatabase className="about-icon" />,
//       title: "Backend Development",
//       description: "Creating scalable APIs with Spring Boot & MySQL",
//     },
//     {
//       icon: <FaGlobe className="about-icon" />,
//       title: "Cloud & DevOps",
//       description: "Deploying apps using Docker, AWS, GitHub Actions",
//     },
//     {
//       icon: <FaBolt className="about-icon" />,
//       title: "System Design",
//       description: "Designing scalable architectures with performance in mind",
//     },
//   ];

//   const timeline = [
//     {
//       title: "Software Developer Engineer",
//       place: "ApplyWizz",
//       duration: "2025 - Present",
//       desc: "Working on enterprise ticketing systems and automation tools.",
//     },
//     {
//       title: "Full Stack Developer Trainee",
//       place: "NxtWave Institutions, Hyderabad",
//       duration: "2024 - 2025",
//       desc: "Trained in full stack development with React and Spring Boot.",
//     },
//     {
//       title: "B.Tech in EEE",
//       place: "Malla Reddy College of Engineering",
//       duration: "Graduated 2024",
//       desc: "Pursued core engineering with a strong interest in software dev.",
//     },
//   ];

//   return (
//     <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
//       <div className="about-container">
//         <h2 className="about-heading">About <span className="gradient-text">Me</span></h2>
//         <p className="about-subtext">A passionate Full Stack Developer with real-world experience in building scalable, cloud-native systems.</p>

//         <div className="about-summary">
//           <div className="about-left">
//             <h3>Professional Summary</h3>
//             <p>
//               I specialize in architecting and developing dynamic web applications using React.js, Spring Boot, MySQL, and DevOps tools.
//               I’ve optimized APIs, implemented CI/CD pipelines, and deployed scalable applications to cloud platforms.
//             </p>
//             <ul className="about-details">
//               <li><strong>📍 Location:</strong> Hyderabad</li>
//               <li><strong>💼 Experience:</strong> 1+ Years</li>
//               <li><strong>🎯 Focus:</strong> Full Stack & Cloud Development</li>
//             </ul>
//           </div>

//           <div className="about-right">
//             {features.map((item, index) => (
//               <div className="about-feature" key={index}>
//                 {item.icon}
//                 <h4>{item.title}</h4>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="education-section">
//           <h3 className="timeline-title">My Journey</h3>
//           <div className="timeline">
//             {timeline.map((item, index) => (
//               <div className="timeline-item" key={index}>
//                 <div className="timeline-dot"></div>
//                 <div className="timeline-content">
//                   <h4>{item.title}</h4>
//                   <p className="timeline-place">{item.place}</p>
//                   <p className="timeline-duration">{item.duration}</p>
//                   <p className="timeline-desc">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
