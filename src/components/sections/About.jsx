import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = ["C++", "Python", "JavaScript", "HTML", "CSS"];
  const frameworks = ["ReactJS", "Tailwind CSS", "Express.js", "Node.js"];
  const databases = ["PostgreSQL", "MongoDB"];
  const tools = ["Git", "GitHub", "pgAdmin 4", "Vercel", "Postman", "VS Code"];
  const coreConcepts = [
    "Data Structures",
    "OOP",
    "Problem Solving",
    "Logical Thinking",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m <strong>Aditya Darda</strong>, an aspiring software developer
              with a strong foundation in full-stack web development,
              problem-solving, and building scalable SaaS solutions. Passionate
              about crafting modern, user-friendly web applications using React,
              Node.js, and databases like PostgreSQL and MongoDB.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "🧠 Languages", items: languages },
                { title: "⚙️ Frameworks", items: frameworks },
                { title: "🗄️ Databases", items: databases },
                { title: "🧩 Tools & Platforms", items: tools },
                { title: "💡 Core Concepts", items: coreConcepts },
              ].map((group, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education and Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master of Computer Applications (MCA)</strong> — JECRC
                  University (2024 – Present)
                  <br />
                  <span className="text-sm text-gray-400">
                    Percentage: 88.9%
                  </span>
                </li>
                <li>
                  <strong>Bachelor of Computer Applications (BCA)</strong> —
                  JECRC University (2021 – 2024)
                  <br />
                  <span className="text-sm text-gray-400">
                    Percentage: 84.2%
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Development Intern — Pratham Software (Feb 2024 –
                    Jun 2024)
                  </h4>
                  <p>
                    Collaborated with a team of developers to design and deploy
                    scalable features, reducing manual work by 10% and improving
                    reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Section */}
          <div className="mt-12 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-center">
            <h3 className="text-xl font-bold mb-6">🌐 Socials</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/adityadarda/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-400 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/adityadarda"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-400 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href="https://leetcode.com/u/aditya_darda/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition"
              >
                LeetCode
              </a>

              <a
                href="https://www.geeksforgeeks.org/user/adityadpi17/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-green-400 text-green-400 rounded-full text-sm font-medium hover:bg-green-400 hover:text-black transition"
              >
                GeeksforGeeks
              </a>

              <a
                href="https://www.codechef.com/users/adityadarda08"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-orange-400 text-orange-400 rounded-full text-sm font-medium hover:bg-orange-400 hover:text-black transition"
              >
                CodeChef
              </a>

              <a
                href="https://www.hackerrank.com/profile/24MCAN0123"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-green-500 text-green-500 rounded-full text-sm font-medium hover:bg-green-500 hover:text-black transition"
              >
                HackerRank
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
