import PageShell from "../components/PageShell";

export default function Experience() {
  const jobs = [
    {
      company: "Acme Corp",
      role: "Senior Frontend Engineer",
      period: "2022 — Present",
      bullets: ["Led rewrites of core UI using React", "Improved performance by 30%"],
    },
    {
      company: "Startup X",
      role: "Frontend Engineer",
      period: "2019 — 2022",
      bullets: ["Built customer-facing dashboards", "Implemented design system components"],
    },
  ];

  return (
    <PageShell title="Work Experience">
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <article key={job.company} className="border border-wf-p/10 p-4 rounded bg-wf-bg/6">
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="font-medium text-wf-p">{job.role}</h3>
                <p className="text-sm text-wf-foreground/90">{job.company}</p>
              </div>
              <time className="text-sm text-wf-foreground/80">{job.period}</time>
            </div>
            <ul className="mt-2 list-disc list-inside text-sm">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
