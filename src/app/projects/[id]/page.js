import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock DB dictionary matching the IDs generated on the home page
const PROJECT_DATA = {
  "semantic-graph-library": {
    title: "Semantic Graph Library",
    subtitle: "Contextual relationship manager for distributed local indices.",
    tag: "FILE_01 // PUBLIC VERSION",
    timeline: "Jan 2026 - Present",
    overview: "This library allows developers to structure abstract entity relations cleanly into local vector nodes. Ideal for specialized offline LLM lookup steps.",
    features: [
      "Zero outside dependency Graph structures",
      "Embedded SQLite fallback pipeline option",
      "Deterministic relationship queries under 4ms latency"
    ]
  },
  "distributed-task-runner": {
    title: "Distributed Task Runner",
    subtitle: "High-throughput asynchronous background job orchestrator.",
    tag: "FILE_02 // DEPLOYED SAAS",
    timeline: "Aug 2025 - Dec 2025",
    overview: "Engineered specifically to solve queue blockages during heavy visual processing or data compilation workloads across multi-tenant servers.",
    features: [
      "Custom pub-sub backpressure mechanisms",
      "Redis state persistence with minimal failure surface",
      "Dockerized worker scaling matrices built-in"
    ]
  }
};

export default function ProjectDetailPage({ params }) {
  const { id } = params;
  const project = PROJECT_DATA[id];

  // Safeguard if a user type-inputs a bogus URL
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Navigation Breadcrumb */}
        <header className="border-b border-apt-primary bg-apt-bg/80 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-sm font-heading text-apt-secondary">
              <Link href="/" className="hover:text-apt-primary transition-colors">~root</Link>
              <span className="mx-2">/</span>
              <span className="text-apt-primary font-bold">projects</span>
              <span className="mx-2">/</span>
              <span className="text-neutral-400">{id}</span>
            </div>
            <Link href="/" className="text-xs border border-apt-primary px-2 py-1 bg-white font-heading hover:bg-neutral-100">
              &lt; Back Home
            </Link>
          </div>
        </header>

        {/* Project Technical Spec Sheet Layout */}
        <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-heading bg-apt-primary text-apt-bg px-3 py-1">
              <span>{project.tag}</span>
              <span>{project.timeline}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight pt-2">{project.title}</h1>
            <p className="text-lg text-apt-secondary font-sans italic">{project.subtitle}</p>
          </div>

          {/* Edit/Modify Section block for future documentation */}
          <section className="space-y-4 border-t border-neutral-300 pt-6">
            <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-apt-primary">&gt;_ Overview</h2>
            <p className="text-base text-apt-secondary leading-relaxed font-sans bg-white border border-apt-primary p-5 shadow-retro">
              {project.overview}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-apt-primary">&gt;_ Core Architecture Features</h2>
            <ul className="space-y-2 pl-4 list-disc text-apt-secondary text-sm">
              {project.features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed font-sans">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-dashed border-neutral-400 pt-6">
            <div className="bg-apt-bg-sub/40 p-4 border border-neutral-300 text-xs text-center font-heading text-apt-secondary">
              💡 Tip: You can expand the entries inside <code className="bg-neutral-200 px-1 font-mono">PROJECT_DATA</code> object inside your dynamic route page to instantly customize this copy.
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-neutral-300 text-xs font-heading text-center py-6 text-apt-secondary">
        <p>© 2026 Saksham. Code module dynamic layout.</p>
      </footer>
    </div>
  );
}