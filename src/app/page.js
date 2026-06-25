import Link from 'next/link';

export default function HomePage() {
  const projects = [
    {
      id: "semantic-graph-library",
      title: "Semantic Graph Library",
      tag: "FILE_01 // PUBLIC",
      year: "2026",
      description: "An open-source general-purpose knowledge graph library designed to create, update, and manage semantic relationships over local database vectors.",
      tech: ["Python", "Ollama", "SQLite"]
    },
    {
      id: "distributed-task-runner",
      title: "Distributed Task Runner",
      tag: "FILE_02 // SAAS",
      year: "2025",
      description: "High-throughput asynchronous task orchestrator engineered with pub-sub mechanics to reduce heavy processing workloads across concurrent microservices.",
      tech: ["Go", "Redis", "Docker"]
    }
  ];

  return (
    <>
      {/* Navigation */}
      <header className="border-b border-apt-primary sticky top-0 bg-apt-bg/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-apt-primary">
            saksham<span className="text-neutral-500">.dev</span>
          </Link>
          <nav className="flex space-x-6 text-sm font-medium text-apt-secondary">
            <a href="#about" className="hover:text-apt-primary transition-colors">01. About</a>
            <a href="#skills" className="hover:text-apt-primary transition-colors">02. Skills</a>
            <a href="#projects" className="hover:text-apt-primary transition-colors">03. Projects</a>
            <a href="#contact" className="hover:text-apt-primary transition-colors">04. Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Section */}
        <section id="about" className="space-y-6 pt-6">
          <div className="inline-block text-xs uppercase tracking-widest bg-apt-primary text-apt-bg px-2 py-1 font-heading">
            Status: Available for opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-apt-primary leading-none font-heading">
            Hi, I am Saksham.
          </h1>
          <p className="text-lg md:text-xl text-apt-secondary max-w-2xl leading-relaxed">
            I am a passionate software engineer focused on building robust, modular web systems. Clean layouts, efficient algorithms, and zero fluff.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="bg-apt-card border border-apt-primary shadow-retro hover:shadow-retro-hover hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all px-4 py-2 font-medium text-sm flex items-center justify-center">
              Explore My Work &rarr;
            </a>
            <a href="#contact" className="px-4 py-2 border border-apt-primary hover:bg-neutral-200 transition-all font-medium text-sm">
              Get in touch
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-apt-primary font-heading">02. Core Expertise</h2>
            <div className="h-[1px] bg-apt-primary flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-apt-primary p-5 bg-white/50 space-y-3">
              <h3 className="font-bold border-b border-apt-primary pb-1 text-sm uppercase tracking-wide font-heading">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "JavaScript", "Python", "Go"].map(s => (
                  <span key={s} className="border border-apt-primary bg-apt-bg-sub text-xs px-2 py-0.5 font-heading">{s}</span>
                ))}
              </div>
            </div>
            <div className="border border-apt-primary p-5 bg-white/50 space-y-3">
              <h3 className="font-bold border-b border-apt-primary pb-1 text-sm uppercase tracking-wide font-heading">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["React / Next.js", "Node.js", "FastAPI", "TailwindCSS"].map(s => (
                  <span key={s} className="border border-apt-primary bg-apt-bg-sub text-xs px-2 py-0.5 font-heading">{s}</span>
                ))}
              </div>
            </div>
            <div className="border border-apt-primary p-5 bg-white/50 space-y-3">
              <h3 className="font-bold border-b border-apt-primary pb-1 text-sm uppercase tracking-wide font-heading">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Docker", "Redis", "AWS"].map(s => (
                  <span key={s} className="border border-apt-primary bg-apt-bg-sub text-xs px-2 py-0.5 font-heading">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-apt-primary font-heading">03. Selected Projects</h2>
            <div className="h-[1px] bg-apt-primary flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-apt-card border border-apt-primary shadow-retro hover:shadow-retro-hover hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-apt-secondary font-heading">
                    <span>{project.tag}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight font-heading">{project.title}</h3>
                  <p className="text-sm text-apt-secondary leading-relaxed">{project.description}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="text-[11px] bg-neutral-100 text-neutral-800 border border-neutral-300 px-2 py-0.5 font-heading">{t}</span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-dashed border-neutral-300 flex justify-between text-xs">
                    <Link href={`/projects/${project.id}`} className="font-bold hover:underline font-heading">
                      &gt;&gt; View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-apt-primary font-heading">04. Connection Terminal</h2>
            <div className="h-[1px] bg-apt-primary flex-grow"></div>
          </div>
          <div className="border border-apt-primary bg-white p-6 md:p-8 space-y-6">
            <p className="text-apt-secondary text-sm">
              Drop a message if you want to collaborate on open-source libraries or infrastructure designs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-heading pt-2">
              <a href="mailto:saksham@example.com" className="flex items-center p-3 border border-neutral-200 hover:border-apt-primary hover:bg-neutral-50 transition-colors">
                📧 saksham@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center p-3 border border-neutral-200 hover:border-apt-primary hover:bg-neutral-50 transition-colors">
                💻 github/saksham
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-300 mt-24 text-xs font-heading text-center py-8 text-apt-secondary">
        <p>© 2026 Saksham. Built using Next.js App Router.</p>
      </footer>
    </>
  );
}