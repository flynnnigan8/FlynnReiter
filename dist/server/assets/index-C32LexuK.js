import { jsxs, jsx } from "react/jsx-runtime";
import { Mail, Github, Linkedin } from "lucide-react";
const personalPortrait = "/assets/headshot_b-CAa596RA.jpg";
const cherriesImg = "/assets/cherries-3ZEOXjkw.png";
const PROJECTS = [
  {
    name: "Droppshipper detection for Etsy",
    blurb: "Extension for determining the liklihood of AI-generated context or drop-shipped items on Etsy. Targetting release date for this extension early 2026",
    stack: ["Go", "Postgres", "Redis", "gRPC"],
    color: "bg-mustard"
  },
  {
    name: "WIP: Something exciting!",
    blurb: "I don't want to reveal too much yet, but I am working on an app which I think will solve a major pain point for a lot of humans out there hoping to improve their lives.",
    stack: ["Python", "React", "Postgres", "AWS"],
    color: "bg-teal"
  },
  {
    name: "Personal Website (this!)",
    blurb: "This website! Built with React and Tailwind, deployed with Vercel. Made with the love I have for retro vibes.",
    stack: ["React", "Tailwind", "Vercel"],
    color: "bg-blush"
  }
  // {
  //   name: "Cherrypick",
  //   blurb: "A tiny CLI that rebases stacked PRs and posts conflict summaries to Slack. Saved my team roughly one human per sprint.",
  //   stack: ["TypeScript", "Octokit", "Bun"],
  //   color: "bg-cream",
  // },
];
function Cherry({
  className = ""
}) {
  return /* @__PURE__ */ jsx("img", { src: cherriesImg, alt: "", "aria-hidden": true, className: `pointer-events-none select-none ${className}` });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b-4 border-ink bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-display text-xl text-cherry", children: [
        "FLYNN.REITER",
        /* @__PURE__ */ jsx("span", { className: "text-ink", children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-teal", children: "EXE" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("nav", { className: "hidden gap-6 font-pixel text-2xl md:flex", children: [
          /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-cherry", children: "about" }),
          /* @__PURE__ */ jsx("a", { href: "#resume", className: "hover:text-cherry", children: "resume" }),
          /* @__PURE__ */ jsx("a", { href: "#projects", className: "hover:text-cherry", children: "projects" }),
          /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-cherry", children: "contact" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("a", { href: "mailto:jreiter92@yahoo.com", className: "flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:text-cherry", "aria-label": "Email", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://github.com/flynnnigan8", target: "_blank", rel: "noreferrer", className: "flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:text-cherry", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(Github, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/flynnreiter", target: "_blank", rel: "noreferrer", className: "flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:text-cherry", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { size: 18 }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "top", className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(Cherry, { className: "absolute -top-6 right-10 w-28 rotate-12 md:w-40" }),
      /* @__PURE__ */ jsx(Cherry, { className: "absolute bottom-10 left-4 w-20 -rotate-12 md:w-28" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-5 md:py-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsx("p", { className: "font-pixel text-2xl text-cherry-dark", children: "> loading_profile.bat" }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-5xl leading-tight text-ink md:text-7xl", children: [
            "Hi, I'm Flynn.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-cherry", children: "I build the parts" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "bg-mustard px-2 chunky-border inline-block", children: "you don't see." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl font-sans text-lg text-ink/80", children: "I’m a backend engineer specializing in high-throughput, real-time backend platforms. At Starbucks, I help design and scale distributed microservices on AWS/Kubernetes—building fast APIs, Kafka-based event flows, and reliable data access with Redis and DynamoDB, all with strong testing and observability practices. I care deeply about sustainability and thoughtful engineering—solutions that are efficient, resilient, and kind to the planet. When I’m not shipping code, I’m probably on the sand playing beach volleyball or spikeball, or outside chasing California sunshine. Also.. my favorite color is green." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "#projects", className: "chunky-border bg-cherry px-5 py-3 font-display text-cream transition hover:-translate-y-0.5 hover:translate-x-0", children: "SEE PROJECTS" }),
            /* @__PURE__ */ jsx("a", { href: "#contact", className: "chunky-border bg-cream px-5 py-3 font-display text-ink transition hover:-translate-y-0.5", children: "SAY HI" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "relative chunky-border-lg rotate-2 bg-cream p-3", children: [
          /* @__PURE__ */ jsx("img", { src: personalPortrait, alt: "Illustrated portrait of Flynn at a CRT monitor", width: 1024, height: 1024, className: "aspect-square w-full object-cover" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 chunky-border bg-teal px-3 py-1 font-pixel text-xl", children: "online ●" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-y-4 border-ink bg-cherry py-3 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 whitespace-nowrap font-display text-2xl text-cream animate-[marquee_30s_linear_infinite]", children: Array.from({
      length: 6
    }).map((_, i) => /* @__PURE__ */ jsx("span", { className: "flex items-center gap-12", children: "★ PYTHON ★ POSTGRES ★ KAFKA ★ KUBERNETES ★ REDIS ★ AWS ★ KOTLIN ★ DATADOG" }, i)) }) }),
    /* @__PURE__ */ jsxs("section", { id: "about", className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "01 // about", title: "A software engineer who likes to have fun" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-8 md:grid-cols-3", children: [{
        h: "What I do",
        p: "Design and ship reliable services."
      }, {
        h: "How I work",
        p: "Simple and effective."
      }, {
        h: "Outside work",
        p: "Personal projects, hiking, reading, beach sports. 🌴"
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "chunky-border bg-cream p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-cherry", children: c.h }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/80", children: c.p })
      ] }, c.h)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "resume", className: "border-y-4 border-ink bg-teal", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "02 // resume", title: "Grab the official paperwork", dark: true }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-ink/80", children: "My entire career in one page :)" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start gap-4 md:items-end", children: /* @__PURE__ */ jsxs("div", { className: "chunky-border-lg bg-cream p-6 w-full max-w-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-pixel text-2xl text-cherry-dark", children: "resume.pdf" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/60", children: "42 KB • Updated 2026" })
          ] }),
          /* @__PURE__ */ jsx(Cherry, { className: "w-14" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "/resume.pdf", download: true, className: "mt-6 block chunky-border bg-cherry px-5 py-3 text-center font-display text-cream transition hover:-translate-y-0.5", children: "↓ DOWNLOAD RESUME" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "projects", className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "03 // projects", title: "Stuff I've actually shipped" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxs("article", { className: `chunky-border p-6 ${p.color} ${i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl text-ink", children: p.name }),
          /* @__PURE__ */ jsxs("span", { className: "font-pixel text-xl text-cherry-dark", children: [
            "0",
            i + 1
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/80", children: p.blurb }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsx("li", { className: "border-2 border-ink bg-cream px-2 py-0.5 font-pixel text-lg", children: s }, s)) })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "border-t-4 border-ink bg-mustard", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "04 // contact", title: "Let's talk", centered: true }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-ink/80", children: "Open to software roles where I can design and build reliable backend systems. If you'd like to reach out, e-mail is fastest." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "mailto:jreiter92@yahoo.com", className: "chunky-border bg-cherry px-6 py-3 font-display text-cream transition hover:-translate-y-0.5", children: "✉ EMAIL ME" }),
        /* @__PURE__ */ jsx("a", { href: "https://github.com/flynnnigan8", target: "_blank", rel: "noreferrer", className: "chunky-border bg-cream px-6 py-3 font-display text-ink transition hover:-translate-y-0.5", children: "GITHUB" }),
        /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/flynnreiter", target: "_blank", rel: "noreferrer", className: "chunky-border bg-teal px-6 py-3 font-display text-ink transition hover:-translate-y-0.5", children: "LINKEDIN" })
      ] }),
      /* @__PURE__ */ jsx(Cherry, { className: "mx-auto mt-12 w-20" })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t-4 border-ink bg-ink text-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 md:flex-row", children: [
      /* @__PURE__ */ jsx("p", { className: "font-pixel text-xl", children: "© 1999–2026 Flynn Reiter. All rights reserved-ish." }),
      /* @__PURE__ */ jsx("p", { className: "font-pixel text-xl text-mustard", children: "made with 🍒 + caffeine" })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      ` })
  ] });
}
function SectionTitle({
  eyebrow,
  title,
  centered,
  dark
}) {
  return /* @__PURE__ */ jsxs("div", { className: centered ? "text-center" : "", children: [
    /* @__PURE__ */ jsx("p", { className: `font-pixel text-2xl ${dark ? "text-ink" : "text-cherry-dark"}`, children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl text-ink md:text-5xl", children: title })
  ] });
}
export {
  Index as component
};
