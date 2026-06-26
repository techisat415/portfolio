import Link from 'next/link';

function ContactLink({ index, label, href, action = "OPEN" }) {
  return (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      className="group flex items-center py-1"
    >
      <span>
        [{index}] {label}
      </span>

      <span className="flex-1 mx-3 border-b border-dotted border-neutral-400"></span>

      <span className="transition-all group-hover:tracking-widest">
        [{action}]
      </span>
    </a>
  );
}

export default function HomePage() {
  const projects = [
    {
      id: "collab-code-workspace",
      title: "Collaborative Code Workspace",
      tag: "FILE_01 // DISTRIBUTED",
      year: "2026",
      github: "https://github.com/techisat415/collab-code-workspace",
      description: "Real-time collaborative workspace powered by CRDTs, resilient session management, and low-latency synchronization.",
      tech: ["Node.js", "Yjs", "WebSockets", "PostgreSQL", "React", "Docker"]
    },
    {
      id: "metro-route-planner",
      title: "Metro Route Planner",
      tag: "FILE_02 // GRAPHS",
      year: "2026",
      github: "https://github.com/techisat415/metro-routing",
      description: "Graph-powered metro navigation engine delivering optimal routes, fares, travel time, and distance instantly.",
      tech: ["Node.js", "React", "PostgreSQL", "Docker"]
    },
    {
      id: "campus-utility-app",
      title: "Campus Utility App",
      tag: "FILE_03 // MOBILE",
      year: "2026",
      github: "https://github.com/Radiation444/CollegeUtility",
      description: "Flutter application streamlining ride sharing, lost & found, and everyday campus services in one platform. ",
      tech: ["Flutter", "Firebase", "Firestore"]
    },
    {
      id: "polarization-simulator",
      title: "Polarization Simulator",
      tag: "FILE_04 // SIMULATION",
      year: "2025",
      github: "https://github.com/BadKarma6969/DSAP",
      description: "Interactive network simulation visualizing how polarized opinions evolve and communities emerge over time.",
      tech: ["Python", "C++", "Data Structures", "Graph Theory"]
    }
  ];

  return (
    <>
      {/* Navigation */}
      <header className="border-b border-apt-primary sticky top-0 bg-apt-bg/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-apt-primary">
            saksham<span className="text-neutral-500">.panghal</span>
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
            CS Undergrad passionate about building scalable backend systems, distributed applications, and solving complex engineering problems through thoughtful software design.
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
                {["C/C++", "JavaScript", "Python", "SQL", "Dart"].map(s => (
                  <span key={s} className="border border-apt-primary bg-apt-bg-sub text-xs px-2 py-0.5 font-heading">{s}</span>
                ))}
              </div>
            </div>
            <div className="border border-apt-primary p-5 bg-white/50 space-y-3">
              <h3 className="font-bold border-b border-apt-primary pb-1 text-sm uppercase tracking-wide font-heading">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "FastAPI", "TailwindCSS"].map(s => (
                  <span key={s} className="border border-apt-primary bg-apt-bg-sub text-xs px-2 py-0.5 font-heading">{s}</span>
                ))}
              </div>
            </div>
            <div className="border border-apt-primary p-5 bg-white/50 space-y-3">
              <h3 className="font-bold border-b border-apt-primary pb-1 text-sm uppercase tracking-wide font-heading">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Docker", "Redis", "Firebase", "MongoDB"].map(s => (
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
                    <Link href={project.github} target="_blank" rel="noreferrer" className="font-bold hover:underline font-heading">
                      &gt;&gt; Github
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="space-y-6">
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
        </section> */}

        <section id="contact" className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold uppercase tracking-wider font-heading">
              04. Contact Protocol
            </h2>
            <div className="h-px flex-1 bg-apt-primary"></div>
          </div>
        <div className="relative">
          <div className="paper relative z-10 border-[0.5px] border-apt-primary px-10 pt-5 pb-12 font-heading space-y-8">

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs tracking-wide text-neutral-500">
                <span className="font-semibold text-neutral-700">contact_protocol.txt</span>
                <span>Session: <span className="text-green-700">active ●</span></span>
              </div>

              <div className="border-t border-dashed border-neutral-400"></div>
            </div>


            <div>
              <span className="text-apt-primary"><b>IDENTIFICATION</b></span>
              <p className="mt-2 ml-6">
                Saksham Panghal<br />
                Computer Science Undergraduate<br/>Indian Institute of Technology Jodhpur
              </p>
            </div>

            <div>
              <span className="text-apt-primary"><b>AVAILABILITY</b></span>
              <p className="mt-2 ml-6 inline-block border border-dashed border-neutral-400 px-4 py-2">
                Open to collaborations and software engineering internships.
              </p>
            </div>

            {/* <div>
              <span className="text-apt-primary"><b>&gt; current status</b></span>
              <div className="ml-6 mt-3 flex items-start gap-4">
                <div className="border-2 border-dotted border-neutral-500 px-5 py-2 inline-block tracking-wide uppercase">
                  Available for Software Engineering Internships
                </div>

              </div>
            </div> */}

            <div>
              <span className="text-apt-primary"><b>FOCUS AREAS</b></span>
              <ul className="mt-2 ml-6 space-y-.1">
                <li>├─ Scalable Backend Architectures</li>
                <li>├─ Distributed Systems</li>
                <li>├─ Real-Time Collaboration</li>
                <li>├─ Database Systems</li>
                <li>└─ Algorithmic Problem Solving</li>
              </ul>
            </div>
            {/* 
            <div>
              <span className="text-apt-primary"><b>&gt; interests</b></span>
              <ul className="mt-2 ml-6 space-y-.08">
                <li>|&gt; Mathematics</li>
                <li>|&gt; Geopolitics</li>
                <li>|&gt; Comics</li>
                <li>|&gt; Philosophy</li>
              </ul>
            </div> */}

            <div>
              <span className="text-apt-primary"><b>CONNECTION CHANNELS</b></span>

              <div className="mt-2 ml-6">

                <ContactLink index="01" label="GitHub" href="https://github.com/techisat415" action="VISIT" />
                <ContactLink index="02" label="LinkedIn" href="https://linkedin.com/in/sakshampanghal" action="VISIT" />
                <ContactLink index="03" label="Email" href="mailto:saksham.panghaal@gmail.com" action="SEND" />
                <ContactLink index="04" label="Resume" href="/resume.pdf" action="OPEN" />

              </div>
            </div>

            <div > 
              <span className="cursor-blink">▌</span>
            </div>

          </div>

          <div className=" absolute left-0 right-0 bottom-[-26px] flex justify-center pointer-events-none z-20">
        <img
            src="/typewriter-roller.png"
            alt="Typewriter Roller"
            className="w-[102%] pointer-events-none select-none"
        />
    </div>
    </div>
        </section>
      </main>

      <footer className="border-t border-neutral-300 mt-10 text-xs font-heading text-center py-8 text-apt-secondary">
        <p>© 2026 Saksham Panghal</p>
      </footer>
    </>
  );
}