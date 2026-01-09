import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ScrollReveal, ScrollRevealItem } from '@/components/ScrollReveal';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Trogon Media Pvt Ltd",
    period: "2023 — 2024",
    description: "Led end-to-end delivery of multiple high-impact projects across ERP, e-commerce, LMS, and healthcare platforms, successfully managing parallel workloads and delivering solutions on time under high-pressure deadlines. Acted as a primary technical liaison for clients, translating business requirements into scalable technical solutions aligned with performance and security goals. Designed and implemented core system modules including admissions, examinations, inventory, orders, payments, and reporting. Built and optimised scalable RESTful APIs, refactored legacy backend logic, and improved database performance to enhance system stability and response times. Integrated multiple secure payment gateways with automated verification workflows. Collaborated closely with cross-functional teams in Agile environments and mentored junior developers through code reviews and technical guidance.",
    technologies: ["PHP", "Laravel", "CodeIgniter", "React", "MySQL", "REST APIs"]
  },
  {
    title: "Junior Software Engineer",
    company: "Sparrow Solutions Pvt Ltd",
    period: "2021 — 2023",
    description: "Contributed to the development and support of accounting and retail ERP systems for small and medium-scale businesses, enabling sales tracking, profit calculation, stock management, and multi-vendor access control. Worked directly with clients to understand business workflows and deliver tailored technical solutions within defined timelines. Handled multiple projects simultaneously while balancing feature development, bug fixes, and production support. Improved backend performance through query optimisation and backend refactoring, resolved live production issues, and collaborated closely with team members to ensure on-time project delivery across finance management systems and dynamic web platforms.",
    technologies: ["PHP", "Laravel", "CodeIgniter", "JavaScript", "MySQL", "Bootstrap", "jQuery"]
  }
];


const skillCategories = [
  {
    title: "Core Backend & Full Stack",
    label: "Primary Stack",
    skills: [
      { name: "PHP", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "CodeIgniter", highlight: true },
      { name: "RESTful API Development", highlight: true },
      { name: "ERP Systems (Accounting, Retail, Healthcare)", highlight: true },
      { name: "E-Commerce Platforms" },
      { name: "Authentication & Role-Based Access Control" },
      { name: "Production Support & System Maintenance" }
    ]
  },
  {
    title: "Frontend Development",
    label: "Hands-On Experience",
    skills: [
      { name: "React.js", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "HTML5 & CSS3" },
      { name: "Responsive UI Development" },
      { name: "Bootstrap & Modern UI Frameworks" },
      { name: "jQuery & AJAX" }
    ]
  },
  {
    title: "Database & Cloud",
    label: "Production Experience",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Database Design & Optimization" },
      { name: "AWS Deployment & Hosting" },
      { name: "Cpanel & Hosting" },
      { name: "Hostinger & Hosting" },
      { name: "Performance Tuning" },
      { name: "Query Optimization" }
    ]
  },
  {
    title: "Tools & Engineering Practices",
    label: "Daily Workflow",
    skills: [
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "CI/CD Pipelines" },
      { name: "Agile & Scrum Methodologies" },
      { name: "Debugging & Troubleshooting" },
      { name: "Live Production Support" }
    ]
  }
];

const projects = [
  {
    name: "Learning Management System",
    domain: "Online Education Platform",
    company: "Trogon Media Pvt Ltd",
    description: "Built a multilingual learning management platform supporting online classes, exams, and secure content access for students and instructors.",
    responsibilities: "Full-stack development, payment integration, role-based access control, and production support.",
    features: ["Online exams", "Live classes", "Multilingual support", "Student reports", "Secure payments"],
    technologies: ["PHP", "Laravel", "REST APIs", "MySQL", "JavaScript", "Bootstrap", "Zoom API"]
  },
  {
    name: "School ERP System",
    domain: "ERP · Education Management",
    company: "Trogon Media Pvt Ltd",
    description: "Developed a comprehensive school ERP to manage admissions, attendance, exams, timetable, fees, and reporting.",
    responsibilities: "Backend development, report optimization, production bug fixes, and system performance improvement.",
    features: ["Admissions management", "Attendance tracking", "Exam management", "Printable reports", "Multi-role dashboards"],
    technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Bootstrap"]
  },
  {
    name: "E-commerce Platform",
    domain: "E-commerce",
    company: "Trogon Media Pvt Ltd",
    description: "Built and maintained an e-commerce platform supporting product management, orders, payments, and customer workflows.",
    responsibilities: "Backend development, payment gateway integration, order processing logic, and production issue resolution.",
    features: ["Product catalog", "Inventory management", "Order processing", "Payment gateway integration", "Admin dashboards"],
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "JavaScript", "Bootstrap"]
  },
  {
    name: "Healthcare Application",
    domain: "Healthcare Platform",
    company: "Trogon Media Pvt Ltd",
    description: "Developed a healthcare application enabling users to locate nearby hospitals and labs, book services, and access emergency features.",
    responsibilities: "API development, third-party integration, and system scalability improvements.",
    features: ["Hospital locator", "Lab services", "Doctor booking", "Emergency support", "Real-time APIs"],
    technologies: ["PHP", "Laravel", "REST APIs", "MySQL", "Mobile APIs", "RTLS integration"]
  },
  {
    name: "Finance Management Platform",
    domain: "Accounting & Finance",
    company: "Sparrow Solutions Pvt Ltd",
    description: "Built a finance management system to track accounts, payments, income, expenses, and financial reports.",
    responsibilities: "Backend development, database design, report generation, and performance optimization.",
    features: ["Account management", "Payment tracking", "Financial dashboards", "Income & expense reports"],
    technologies: ["PHP", "CodeIgniter", "MySQL", "Chart libraries", "Bootstrap"]
  },
  {
    name: "Retail and Accounting ERP",
    domain: "Multi-vendor Retail ERP",
    company: "Sparrow Solutions Pvt Ltd",
    description: "Worked on a retail and accounting ERP system supporting sales, profit calculation, stock management, and multi-vendor access.",
    responsibilities: "Production support, bug fixing, performance optimization, and backend logic improvements.",
    features: ["Sales tracking", "Profit reports", "Stock management", "Vendor-level access control"],
    technologies: ["PHP", "Laravel", "MySQL", "CodeIgniter"]
  },
  {
    name: "Water Testing Management System",
    domain: "Utility & Laboratory Management",
    company: "Sparrow Solutions Pvt Ltd",
    description: "Developed a system to manage water testing operations including staff assignment, report generation, and account handling.",
    responsibilities: "Full-stack development, report automation, and system maintenance.",
    features: ["Lab management", "Staff coordination", "PDF reports", "Water quality tracking"],
    technologies: ["PHP", "MySQL", "Bootstrap", "PDF generation"]
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Adhilpk9846@gmail.com",
    href: "mailto:Adhilpk9846@gmail.com"
  },
  {
    icon: Github,
    label: "Phone",
    value: "+44 7887 155491",
    href: "tel:+447887155491"
  }
];

const strengths = [
  "Over three years of hands-on full-stack development experience delivering production-ready applications",
  "Strong expertise in PHP frameworks including CodeIgniter 3 & 4 and Laravel",
  "Proven experience building and maintaining enterprise-grade systems",
  "Experienced working in Agile environments with effective team collaboration",
  "Highly self-motivated engineer with strong problem-solving and debugging skills",
  "Hands-on experience across EdTech, Healthcare, ERP, E-commerce, and Finance domains"
];

const Hero = () => {
  const activeSection = useActiveSection(['about', 'experience', 'skills', 'projects', 'contact']);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:grid lg:min-h-svh lg:grid-cols-2 lg:items-start lg:gap-4">
          
          {/* Left Side - Fixed Content (Desktop Only) */}
          <header className="hidden lg:flex lg:sticky lg:top-0 lg:h-svh lg:w-full lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Adil P K
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                Full-Stack PHP Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
                I build scalable, production-grade web applications for real-world business needs.
              </p>

              {/* Section Navigation */}
              <nav className="nav mt-16" aria-label="In-page jump links">
                <ul className="w-max">
                  {[
                    { id: 'about', label: 'ABOUT' },
                    { id: 'experience', label: 'EXPERIENCE' },
                    { id: 'skills', label: 'SKILLS' },
                    { id: 'projects', label: 'PROJECTS' },
                    { id: 'contact', label: 'CONTACT' },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`group flex items-center py-3 transition-all duration-300`}
                      >
                        <span
                          className={`mr-4 h-px transition-all duration-300 ${
                            activeSection === item.id
                              ? 'w-16 bg-foreground'
                              : 'w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground'
                          }`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                            activeSection === item.id
                              ? 'text-foreground'
                              : 'text-muted-foreground group-hover:text-foreground'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li>
                <a
                  href="https://github.com/coded-by-Adhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="GitHub (opens in a new tab)"
                >
                  <Github size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/adhil-pk-3230a0274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="LinkedIn (opens in a new tab)"
                >
                  <Linkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:Adhilpk9846@gmail.com"
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Side - Scrolling Content (All Sections) */}
          <main id="content" className="pt-20 lg:pt-24 lg:w-full lg:py-24">
            {/* Mobile Header */}
            <div className="lg:hidden mb-12">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Adil P K
              </h1>
              <h2 className="mt-2 text-base font-medium tracking-tight text-foreground sm:text-lg">
                Full-Stack PHP Developer
              </h2>
              <p className="mt-3 leading-normal text-muted-foreground text-sm">
                I build scalable, production-grade web applications for real-world business needs.
              </p>
            </div>

            <section id="about" className="mb-12 scroll-mt-24 md:mb-20 lg:mb-32 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
              </div>
              <ScrollReveal>
                <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I am a results-driven <span className="text-foreground font-medium">Full-Stack Software Engineer</span> with over three years of hands-on experience delivering and supporting <span className="text-foreground font-medium">production-grade applications</span> across <span className="text-foreground font-medium">ERP</span>, <span className="text-foreground font-medium">e-commerce</span>, <span className="text-foreground font-medium">online learning</span>, <span className="text-foreground font-medium">healthcare</span>, and <span className="text-foreground font-medium">finance domains</span>. I have been trusted to build, optimise, and maintain <span className="text-foreground font-medium">business-critical systems</span> used by real customers in live environments. I hold a Master’s degree in Computer Science from the <span className="text-foreground font-medium">University of Hertfordshire</span>, providing a strong foundation in software engineering.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      I specialise in <span className="text-foreground font-medium">PHP frameworks including Laravel and CodeIgniter</span>, alongside <span className="text-foreground font-medium">React</span> for frontend development. My experience includes designing <span className="text-foreground font-medium">scalable RESTful APIs</span>, integrating <span className="text-foreground font-medium">secure payment gateways</span>, optimising backend performance, and modernising legacy systems to improve reliability and scalability. I am highly confident handling complex technical challenges and resolving critical production issues under pressure.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Beyond development, I work closely with <span className="text-foreground font-medium">clients and cross-functional teams</span> to understand business requirements and translate them into effective technical solutions. I take <span className="text-foreground font-medium">end-to-end ownership</span> of features and projects, contribute to architectural decisions, and actively support junior developers through collaboration, code reviews, and technical guidance.
                    </p>
                  </div>

              </ScrollReveal>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-12 scroll-mt-24 md:mb-20 lg:mb-32 lg:scroll-mt-24" aria-label="Work experience">
              <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Experience</h2>
              </div>
              
              <div>
                <ol className="group/list">
                  {experiences.map((exp, index) => (
                    <ScrollRevealItem key={index} delay={index * 0.1}>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                            {exp.period}
                          </header>
                          
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-foreground">
                              <div className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  {exp.title} · <span className="inline-block">{exp.company}</span>
                                </span>
                                <ArrowUpRight 
                                  size={16} 
                                  className="ml-1 inline-block h-4 w-4 shrink-0 opacity-0 -translate-y-px translate-x-[-2px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" 
                                />
                              </div>
                            </h3>
                            
                            <p className="mt-2 text-sm leading-normal text-muted-foreground">
                              {exp.description}
                            </p>
                            
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {exp.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                                    {tech}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ScrollRevealItem>
                  ))}
                </ol>

              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-12 scroll-mt-24 md:mb-20 lg:mb-32 lg:scroll-mt-24" aria-label="Skills">
              <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Skills</h2>
              </div>

              <div className="space-y-10">
                {skillCategories.map((category, index) => (
                  <ScrollRevealItem key={index} delay={index * 0.1}>
                    <div className="group">
                      <div className="flex items-baseline gap-3 mb-4">
                        <h3 className="text-foreground font-semibold">
                          {category.title}
                        </h3>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {category.label}
                        </span>
                      </div>
                      
                      <ul className="flex flex-wrap" aria-label={category.title}>
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="mr-1.5 mt-2">
                            <div
                              className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${
                                skill.highlight 
                                  ? 'bg-primary/10 text-primary' 
                                  : 'bg-muted/50 text-muted-foreground'
                              }`}
                            >
                              {skill.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollRevealItem>
                ))}

                <ScrollReveal>
                  <div className="pt-8 border-t border-border/30">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Hands-on experience building and maintaining scalable systems in production environments. 
                      Focused on clean architecture, reliable code, and efficient problem-solving across 
                      full-stack web development.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-12 scroll-mt-24 md:mb-20 lg:mb-32 lg:scroll-mt-24" aria-label="Projects">
              <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
              </div>

              <ol className="group/list">
                {projects.map((project, index) => (
                  <ScrollRevealItem key={index} delay={index * 0.08}>
                    <li className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        
                        <div className="z-10">
                          <h3 className="font-medium leading-snug text-foreground">
                            <div className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{project.name}</span>
                              <ArrowUpRight 
                                size={16} 
                                className="ml-1 inline-block h-4 w-4 shrink-0 opacity-0 -translate-y-px translate-x-[-2px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" 
                              />
                            </div>
                          </h3>
                          
                          <p className="mt-1 text-sm text-primary/80 font-medium">
                            {project.domain} · <span className="text-muted-foreground font-normal">{project.company}</span>
                          </p>

                          <p className="mt-2 text-sm leading-normal text-muted-foreground">
                            {project.description}
                          </p>

                          <div className="mt-3">
                            <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-1">
                              Key Contributions
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {project.responsibilities}
                            </p>
                          </div>

                          <div className="mt-3">
                            <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">
                              Key Features
                            </h4>
                            <ul className="flex flex-wrap" aria-label="Features">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="mr-1.5 mt-1">
                                  <div className="flex items-center rounded-full bg-muted/50 px-3 py-1 text-xs font-medium leading-5 text-muted-foreground">
                                    {feature}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                            {project.technologies.map((tech, techIndex) => (
                              <li key={techIndex} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ScrollRevealItem>
                ))}
              </ol>

              <ScrollReveal>
                <div className="pt-8 border-t border-border/30">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All projects listed are real production systems built and maintained for business clients.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-24 lg:scroll-mt-24 pb-16 lg:pb-24" aria-label="Contact">
              <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Contact</h2>
              </div>

              <div className="space-y-10">
                <ScrollReveal>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-3">
                      Let's Work Together
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      Ready to bring your next project to life? Let's discuss how my full-stack development expertise can help solve your business challenges.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollRevealItem delay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a 
                      href="mailto:Adhilpk9846@gmail.com"
                      className="block p-4 rounded-lg hover:bg-card/50 transition-all duration-300 -mx-4 group"
                    >
                      <Mail size={20} className="text-primary mb-3" />
                      <h4 className="text-foreground font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors break-all">
                        Adhilpk9846@gmail.com
                      </p>
                    </a>
                    <div className="p-4 -mx-4">
                      <Github size={20} className="text-primary mb-3" />
                      <h4 className="text-foreground font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm">Kingston Upon Thames, London, UK</p>
                    </div>
                  </div>
                </ScrollRevealItem>

                <ScrollRevealItem delay={0.2}>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-4">
                      Connect With Me
                    </h4>
                    <div className="flex gap-3">
                      <a 
                        href="https://github.com/coded-by-Adhil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 text-sm font-medium"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href="https://linkedin.com/in/adhil-pk-3230a0274" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </ScrollRevealItem>

                <ScrollRevealItem delay={0.3}>
                  <div className="relative grid gap-4 pb-1 transition-all">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md bg-card/30 border border-border/30"></div>
                    <div className="relative z-10 p-6">
                      <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-5">
                        Why Work With Me
                      </h4>
                      <ul className="space-y-4">
                        {strengths.map((strength, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollRevealItem>

                <ScrollReveal>
                  <div className="pt-8 border-t border-border/30">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Open to full-time opportunities, contract work, and consulting engagements.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;