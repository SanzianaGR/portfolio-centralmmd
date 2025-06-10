import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Moon,
  Sun,
  ChevronDown,
  Code,
  Database,
  Settings,
  Briefcase,
  GraduationCap,
  User,
  Send,
  Wrench,
  BarChart3,
  Cog,
  Award,
  Calendar,
  Building,
  Instagram,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    {
      name: "Python",
      description:
        "Experienced in OOP, data handling, and prototyping automation systems",
      icon: Code,
      level: 90,
    },
    {
      name: "MATLAB",
      description:
        "Experienced in simulating power plant cycles and thermodynamic systems (e.g., T–s diagrams), as well as performing data manipulation, algorithmic design",
      icon: BarChart3,
      level: 85,
    },
    {
      name: "SolidWorks",
      description:
        "Proficient in part modeling, assemblies, and technical drawing for real-world manufacturing use cases",
      icon: Cog,
      level: 80,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        } backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-900"
                } flex items-center justify-center`}
              >
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="text-lg font-semibold">Mohammad Asghari</span>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                {[
                  { name: "About", icon: User },
                  { name: "Skills", icon: Settings },
                  { name: "Experience", icon: Briefcase },
                  { name: "Education", icon: GraduationCap },
                  { name: "Contact", icon: Mail },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name.toLowerCase())}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      activeSection === item.name.toLowerCase()
                        ? "text-gray-900 dark:text-white"
                        : darkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div
              className={`w-32 h-32 rounded-2xl mx-auto mb-8 ${
                darkMode ? "bg-gray-800" : "bg-gray-900"
              } flex items-center justify-center shadow-xl`}
            >
              <span className="text-white text-4xl font-bold">MA</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Mohammad
            <br />
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Asghari
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Mechanical Engineering student at the University of Twente,
            passionate about applying programming, simulation, and smart design
            to solve real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-4 ${
                darkMode
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              } rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}
            >
              <Send size={18} />
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`px-8 py-4 border-2 ${
                darkMode
                  ? "border-gray-600 hover:border-gray-500 hover:bg-gray-800"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
              } rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2`}
            >
              <User size={18} />
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            size={24}
            className={darkMode ? "text-gray-600" : "text-gray-400"}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <User
              size={32}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-gray-50 border border-gray-200"
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <Wrench
                    size={24}
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  />
                </div>
                <h3 className="text-xl font-semibold">My Passion</h3>
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My passion lies at the intersection of engineering and
                technology — building systems that are both functional and
                intelligent.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-gray-50 border border-gray-200"
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <GraduationCap
                    size={24}
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  />
                </div>
                <h3 className="text-xl font-semibold">Background</h3>
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm currently pursuing a Bachelor's degree in Mechanical
                Engineering at the University of Twente, alongside an Honours
                program in Business and Entrepreneurship. I work with tools like
                MATLAB, SolidWorks, and Python to build smart mechanical systems
                and I'm especially interested in automation, simulation, and
                product optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <Settings
              size={32}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-8 rounded-2xl ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                } hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 group-hover:bg-gray-600"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <skill.icon
                      size={24}
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {skill.level}% Proficiency
                    </span>
                  </div>
                </div>

                <div
                  className={`w-full h-2 rounded-full mb-6 ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      darkMode ? "bg-gray-400" : "bg-gray-600"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <Briefcase
              size={32}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-50 border border-gray-200"
            } hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto`}
          >
            <div className="flex items-start gap-6">
              <div
                className={`p-4 rounded-xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <Building
                  size={32}
                  className={darkMode ? "text-gray-300" : "text-gray-700"}
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold">RealtorAI</h3>
                  <div
                    className={`flex items-center gap-2 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MapPin size={16} />
                    <span>Cyprus</span>
                    <Calendar size={16} className="ml-2" />
                    <span>2022–2023</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Award
                    size={18}
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  />
                  <p className="text-lg font-medium">
                    Co-Founder / CRM Tool specialized for Real Estate
                    Specialists
                  </p>
                </div>

                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Led the development of an innovative CRM solution tailored
                  specifically for real estate professionals, combining
                  technical expertise with business acumen to create a
                  comprehensive platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <GraduationCap
              size={32}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cog
                  size={24}
                  className={darkMode ? "text-gray-400" : "text-gray-600"}
                />
                <h3 className="text-xl font-bold">
                  Bachelor Mechanical Engineering
                </h3>
              </div>
              <p
                className={`font-medium mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                University of Twente
              </p>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                2024–2027
              </p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Project Oriented – Energy and Sustainability
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award
                  size={24}
                  className={darkMode ? "text-gray-400" : "text-gray-600"}
                />
                <h3 className="text-xl font-bold">
                  Business & Entrepreneurship Honours
                </h3>
              </div>
              <p
                className={`font-medium mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                University of Twente
              </p>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                2025–2027
              </p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Top 10% student, selected for Honours program via 4TU & NovelT
                startup accelerator.
              </p>
            </div>
          </div>

          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                : "bg-white border border-gray-200 hover:border-gray-300"
            } hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto`}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap
                size={24}
                className={darkMode ? "text-gray-400" : "text-gray-600"}
              />
              <h3 className="text-xl font-bold">
                International Advanced Level (A-Level)
              </h3>
            </div>

            <p
              className={`font-medium mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              The English School of Kyrenia • 2021–2024
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BarChart3 size={18} />
                  Academic Excellence
                </h4>
                <p
                  className={`mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  A-Levels: Mathematics, Physics, Computer Science
                </p>
                <p
                  className={`font-medium ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  GPA: 9.94 / 10
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Award size={18} />
                  Results & Leadership
                </h4>
                <p
                  className={`mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  CS: A (Cambridge), Physics: B, Math: B (Pearson)
                </p>
                <p
                  className={`font-medium ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Head of Robotic Arm & 3D Printing Club
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail
              size={32}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>

          <p
            className={`text-xl text-center mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Looking to start a project or need consultation? Feel free to reach
            out.
          </p>

          <div className="flex items-center justify-center gap-2 mb-12">
            <MapPin
              size={18}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Enschede – The Netherlands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <a
              href="mailto:mohammad.m.asghari1@gmail.com"
              className={`flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                  : "bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900"
              }`}
            >
              <Mail size={32} />
              <span className="font-medium text-center">Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohammadmahdi-asghari-79b2b9212/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                  : "bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900"
              }`}
            >
              <Linkedin size={32} />
              <span className="font-medium text-center">LinkedIn</span>
            </a>

            <a
              href="https://github.com/mohammadxe"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                  : "bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900"
              }`}
            >
              <Github size={32} />
              <span className="font-medium text-center">GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/centralmmd/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                  : "bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900"
              }`}
            >
              <Instagram size={32} />
              <span className="font-medium text-center">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          darkMode
            ? "border-gray-800 bg-gray-900"
            : "border-gray-200 bg-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2025 Mohammad Asghari. Built with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
