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
    <PageShell title="Through the Years">
      <div className="flex flex-col gap-6">
      </div>
    </PageShell>
  );
}
