"use client";

import PageShell from "../components/PageShell";

type Project = {
  title: string;
  description: string;
  link?: string;
  date: string;
};

const projects: Project[] = [
{
    title: "AI Detection Google Chrome Extension for Etsy",
    description: "Extension for determining the liklihood of AI-generated context or drop-shipped items on Etsy. Targetting release date for this extension early 2026",
    date: "Coming \nSoon",
  },
  {
    title: "Personal Website",
    description: "This site — built with Next.js and Tailwind CSS.",
    link: "/",
    date: "Oct 2025 \nWIP",
  },
  {
    title: "Pairwise Test Generator",
    description:
      "Automated YAML-driven pairwise test case generator in Python.",
    date: "July 2025 \nWIP",
  },
];

export default function Projects() {
  return (
    <PageShell title="Projects">
      <div className="mx-auto mt-10 max-w-5xl flex flex-col gap-10">
        {projects.map((p) => (
          <div key={p.title} className="relative flex gap-6 items-center">
            <div className="flex flex-col items-center w-16">
              <div className="text-xs font-medium text-foreground/70 mb-1">
                {p.date}
              </div>
            </div>

            <article
              className="
                relative
                flex-1
                rounded-2xl
                p-6
                bg-[color-mix(in_srgb,var(--lilac)_50%,var(--plum)_50%)]
                shadow-sm
                hover:shadow-md
                transition
                text-foreground
              "
            >
              <div className="absolute left-[-28px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[var(--plum)] border-2 border-[var(--lilac)] shadow-sm" />

              <h3
                className="
                  text-xl
                  font-semibold
                  text-[var(--foreground)]
                  decoration-[var(--lilac)]
                  underline-offset-4
                "
              >
                {p.title}
              </h3>
              <p className="text-sm mt-2">{p.description}</p>
              {p.link && (
                <a
                  href={p.link}
                  className="mt-3 inline-block text-sm underline text-[var(--lilac)] decoration-[var(--foreground)] hover:opacity-80 transition"
                >
                  View
                </a>
              )}
            </article>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
