import { createFileRoute } from "@tanstack/react-router";
import personalPortrait from "@/assets/headshot_b.jpg";
import cherriesImg from "@/assets/cherries.png";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flynn Reiter — Backend Engineer" },
      { name: "description", content: "Portfolio of Flynn Reiter, backend engineer building reliable distributed systems. Retro 90s vibes, very serious code." },
      { property: "og:title", content: "Flynn Reiter — Backend Engineer" },
      { property: "og:description", content: "Portfolio of Flynn Reiter, backend engineer building reliable distributed systems." },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  {
    name: "Droppshipper detection for Etsy",
    blurb: "Extension for determining the likelihood of AI-generated context or drop-shipped items on Etsy. Targetting release date for this extension late 2026.",
    stack: ["Go", "Postgres", "Redis", "gRPC"],
    color: "bg-mustard",
  },
  {
    name: "WIP: Something exciting!",
    blurb: "I don't want to reveal too much yet, but I am working on an app which I think will solve a major pain point for a lot of humans out there hoping to improve their lives.",
    stack: ["Python", "React", "Postgres", "AWS"],
    color: "bg-teal",
  },
  {
    name: "Personal Website (this!)",
    blurb: "This website! Built with React and Tailwind, deployed with Vercel. Made with the love I have for retro vibes.",
    stack: ["React", "Tailwind", "Vercel"],
    color: "bg-blush",
  },
  // {
  //   name: "Cherrypick",
  //   blurb: "A tiny CLI that rebases stacked PRs and posts conflict summaries to Slack. Saved my team roughly one human per sprint.",
  //   stack: ["TypeScript", "Octokit", "Bun"],
  //   color: "bg-cream",
  // },
];

function Cherry({ className = "" }: { className?: string }) {
  return (
    <img
      src={cherriesImg}
      alt=""
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
    />
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden text-foreground">
      {/* NAV */}
      <header className="border-b-4 border-ink bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="#top" className="font-display text-base text-cherry sm:text-xl">
            FLYNN<span className="text-ink">.</span><span className="text-teal">REITER</span>
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            <nav className="hidden gap-6 font-pixel text-2xl md:flex">
              <a href="#about" className="hover:text-cherry">about</a>
              <a href="#resume" className="hover:text-cherry">resume</a>
              <a href="#projects" className="hover:text-cherry">projects</a>
              <a href="#contact" className="hover:text-cherry">contact</a>
            </nav>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="mailto:jreiter92@yahoo.com"
                className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:text-cherry"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/flynnnigan8"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:text-cherry"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/flynnreiter"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:text-cherry"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* PORTRAIT */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-5 md:py-24">
          <div className="md:col-span-3">
            <CherryCatcher />
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl md:text-7xl">
              Hi, I'm Flynn.<br />
              <span className="text-cherry">I build the parts</span><br />
              <span className="bg-mustard px-2 chunky-border inline-block">you don't see.</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg text-ink/80">
              I’m a backend engineer specializing in high-throughput, real-time backend platforms. 
              At Starbucks, I help design and scale distributed microservices on AWS/Kubernetes—building 
              fast APIs, Kafka-based event flows, and reliable data access with Redis and DynamoDB, 
              all with strong testing and observability practices. I care deeply about sustainability and 
              thoughtful engineering—solutions that are efficient, resilient, and kind to the planet. 
              When I’m not shipping code, I’m probably on the sand playing beach volleyball or spikeball, 
              or outside chasing California sunshine. Also.. my favorite color is green.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="chunky-border bg-cherry px-5 py-3 font-display text-cream transition hover:-translate-y-0.5 hover:translate-x-0"
              >
                SEE PROJECTS
              </a>
              <a
                href="#contact"
                className="chunky-border bg-cream px-5 py-3 font-display text-ink transition hover:-translate-y-0.5"
              >
                SAY HI
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative chunky-border-lg rotate-2 bg-cream p-3">
              <img
                src={personalPortrait}
                alt="Illustrated portrait of Flynn at a CRT monitor"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 chunky-border bg-teal px-3 py-1 font-pixel text-xl">
                online ●
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y-4 border-ink bg-cherry py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap font-display text-2xl text-cream animate-[marquee_30s_linear_infinite]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              ★ PYTHON ★ POSTGRES ★ KAFKA ★ KUBERNETES ★ REDIS ★ AWS ★ KOTLIN ★ DATADOG
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="01 // about" title="A software engineer who loves to dance" />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            { h: "What I do", p: "Design and ship reliable services, mostly in Python." },
            { h: "How I work", p: "With deep care for quality, effective communication, and only making things as complex as necessary." },
            { h: "Outside work", p: "Personal projects, hiking, reading, beach sports. 🌴" },
          ].map((c) => (
            <div key={c.h} className="chunky-border bg-cream p-6">
              <h3 className="font-display text-2xl text-cherry">{c.h}</h3>
              <p className="mt-3 text-ink/80">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="border-y-4 border-ink bg-teal">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="02 // resume" title="Here, take my resume" dark />
            <p className="mt-6 max-w-md text-ink/80">
              My entire career in one page :)
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="chunky-border-lg bg-cream p-6 w-full max-w-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-pixel text-2xl text-cherry-dark">Flynns_resume.pdf</p>
                  <p className="text-sm text-ink/60">899 KB • Updated 2026</p>
                </div>
                🍒
              </div>
              <a
                href="/resume.pdf"
                download
                className="mt-6 block chunky-border bg-cherry px-5 py-3 text-center font-display text-cream transition hover:-translate-y-0.5"
              >
                ↓ DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="03 // projects" title="Stuff I've actually made" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className={`chunky-border p-6 ${p.color} ${i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl text-ink">{p.name}</h3>
                <span className="font-pixel text-xl text-cherry-dark">0{i + 1}</span>
              </div>
              <p className="mt-3 text-ink/80">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="border-2 border-ink bg-cream px-2 py-0.5 font-pixel text-lg">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t-4 border-ink bg-mustard">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <SectionTitle eyebrow="04 // contact" title="Let's talk" centered />
          <p className="mx-auto mt-6 max-w-xl text-ink/80">
            Open to software roles where I can design and build reliable, and scalable backend systems. If you'd like to reach out, e-mail is fastest.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jreiter92@yahoo.com"
              className="chunky-border bg-cherry px-6 py-3 font-display text-cream transition hover:-translate-y-0.5"
            >
              ✉ EMAIL ME
            </a>
            <a
              href="https://github.com/flynnnigan8"
              target="_blank"
              rel="noreferrer"
              className="chunky-border bg-cream px-6 py-3 font-display text-ink transition hover:-translate-y-0.5"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/flynnreiter"
              target="_blank"
              rel="noreferrer"
              className="chunky-border bg-teal px-6 py-3 font-display text-ink transition hover:-translate-y-0.5"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-ink bg-ink text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 sm:px-6 md:flex-row">
          <p className="font-pixel text-xl">© 1999–2026 Flynn Reiter. All rights reserved-ish. 🍒</p>
          <p className="font-pixel text-xl text-mustard">made with caffeine</p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}

function CherryCatcher() {
  // Cherry Lights Out puzzle. Click a tile to toggle it and its
  // orthogonal neighbors. Goal: turn every cherry off. Each new game
  // generates a fresh solvable board, so the puzzle is different every time.
  const SIZE = 4;
  const TOTAL = SIZE * SIZE;

  const makeBoard = () => {
    const board = Array(TOTAL).fill(false) as boolean[];
    const toggle = (b: boolean[], i: number) => {
      const row = Math.floor(i / SIZE);
      const col = i % SIZE;
      const idxs = [i];
      if (row > 0) idxs.push(i - SIZE);
      if (row < SIZE - 1) idxs.push(i + SIZE);
      if (col > 0) idxs.push(i - 1);
      if (col < SIZE - 1) idxs.push(i + 1);
      idxs.forEach((k) => (b[k] = !b[k]));
    };
    // Apply 5–9 random presses from the solved state — guarantees solvability
    // and a fresh layout every time.
    const presses = 5 + Math.floor(Math.random() * 5);
    for (let p = 0; p < presses; p++) {
      toggle(board, Math.floor(Math.random() * TOTAL));
    }
    // Avoid the trivial already-solved case.
    if (board.every((c) => !c)) toggle(board, Math.floor(Math.random() * TOTAL));
    return board;
  };

  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState<boolean[]>(() => makeBoard());
  const [moves, setMoves] = useState(0);
  const [wins, setWins] = useState(0);

  const solved = board.every((c) => !c);

  const press = (i: number) => {
    if (solved) return;
    setBoard((prev) => {
      const next = [...prev];
      const row = Math.floor(i / SIZE);
      const col = i % SIZE;
      const idxs = [i];
      if (row > 0) idxs.push(i - SIZE);
      if (row < SIZE - 1) idxs.push(i + SIZE);
      if (col > 0) idxs.push(i - 1);
      if (col < SIZE - 1) idxs.push(i + 1);
      idxs.forEach((k) => (next[k] = !next[k]));
      return next;
    });
    setMoves((m) => m + 1);
  };

  useEffect(() => {
    if (solved && moves > 0) setWins((w) => w + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solved]);

  const newGame = () => {
    setBoard(makeBoard());
    setMoves(0);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="font-pixel text-2xl text-cherry-dark hover:text-cherry text-left"
        aria-expanded={open}
      >
        &gt; loading_profile.bat{open ? " ▾" : " ▸"}
      </button>
      {open && (
        <div className="mt-3 chunky-border bg-cream p-4 max-w-md animate-fade-in">
          <div className="flex items-center justify-between font-pixel text-xl">
            <span className="text-cherry-dark">🍒 CHERRY PICKER</span>
            <span className="text-ink">{solved ? "solved!" : `${moves} moves`}</span>
          </div>
          <p className="mt-1 font-sans text-sm text-ink/70">
            Tap a tile to flip it and its neighbors. Clear every cherry to win.
            New puzzle every game.
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {board.map((on, i) => (
              <button
                key={i}
                type="button"
                onClick={() => press(i)}
                disabled={solved}
                className={`aspect-square border-2 border-ink text-3xl flex items-center justify-center transition hover:-translate-y-0.5 ${
                  on ? "bg-cherry" : "bg-blush"
                }`}
                aria-label={on ? "cherry on" : "empty"}
              >
                {on ? "🍒" : ""}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between font-pixel text-xl">
            <span>
              WINS: <span className="text-cherry">{wins}</span>
            </span>
            <button
              type="button"
              onClick={newGame}
              className="chunky-border bg-cherry px-3 py-1 font-display text-cream text-sm hover:-translate-y-0.5 transition"
            >
              {solved ? "PLAY AGAIN" : "NEW PUZZLE"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  centered,
  dark,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className={`font-pixel text-2xl ${dark ? "text-ink" : "text-cherry-dark"}`}>{eyebrow}</p>
      <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">{title}</h2>
    </div>
  );
}
