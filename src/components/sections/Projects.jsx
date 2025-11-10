import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {/* Quick AI Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Quick AI</h3>
              <p className="text-gray-400 mb-4">
                An AI-powered SaaS platform for intelligent content creation,
                image editing, and resume analysis. Users can generate AI-based
                article titles, create images from text prompts, remove
                backgrounds or objects, and perform automated resume analysis.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["PostgreSQL", "Express.js", "React.js", "Node.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://quick-ai-delta-jet.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Project →
                </a>
              </div>
            </div>

            {/* Portfolio Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Personal Portfolio Website
              </h3>
              <p className="text-gray-400 mb-4">
                A modern, responsive portfolio website designed and developed to
                showcase my projects, skills, and professional experience. Built
                with React and Tailwind CSS for smooth animations and a clean,
                developer-focused design.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Tailwind CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#home" // local link for now
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Portfolio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
