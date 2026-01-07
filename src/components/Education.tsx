
import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MSc in Computer Science",
      institution: "University of Hertfordshire",
      location: "UK",
      period: "2024 – Present",
      status: "In Progress",
      description: "Advanced studies in computer science with focus on modern software engineering practices"
    },
    {
      degree: "BSc in Computer Science",
      institution: "Mangalore University",
      location: "India",
      period: "2016 – 2019",
      gpa: "CGPA: 7.9/10",
      status: "Completed",
      description: "Foundation in computer science principles, programming, and software development"
    }
  ];

  const workExperience = [
    {
      company: "Trogon Media Pvt Ltd",
      location: "Kozhikode, India",
      role: "Software Engineer",
      period: "Sep 2023 – Apr 2024",
      achievements: [
        "Built LMS, School ERP, and medQ healthcare apps from scratch",
        "Managed Zoom API integration and payment gateway implementations",
        "Developed mobile APIs and real-time features",
        "Worked across multiple projects in Agile workflows",
        "Provided production support and bug fixes"
      ]
    },
    {
      company: "Sparrow Solutions Pvt Ltd",
      location: "India",
      role: "Software Engineer",
      period: "Jan 2021 – Aug 2023",
      achievements: [
        "Developed finance, family tree, water testing, and quiz applications",
        "Led backend development and user-centric UI implementation", 
        "Delivered feature-rich, production-ready systems",
        "Managed full-stack development cycles",
        "Collaborated with cross-functional teams"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic foundation in computer science combined with extensive professional development experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <GraduationCap className="text-blue-400 mr-3" size={28} />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'In Progress' 
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-green-600/20 text-green-300 border border-green-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                  <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{edu.period}</span>
                    {edu.gpa && <span className="text-white font-medium">{edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Building2 className="text-green-400 mr-3" size={28} />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">{work.role}</h4>
                    <p className="text-blue-400 font-medium">{work.company}</p>
                    <p className="text-gray-400 text-sm">{work.location}</p>
                    <p className="text-gray-300 text-sm">{work.period}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-white font-medium mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {work.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Self-motivated and detail-oriented Full-Stack PHP Developer with over 3 years of professional experience 
            building scalable web applications across diverse sectors including EdTech, Healthcare, Finance, and ERP systems. 
            Proven expertise in CodeIgniter, Laravel, JavaScript, and modern development practices. Strong track record of 
            delivering complete product cycles from development to deployment while collaborating effectively in Agile environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
