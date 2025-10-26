"use client";

import { useEffect, useState } from "react";

import PageShell from "../components/PageShell";

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <PageShell
      title="Resume"
      actions={
        <a href="/resume.pdf" download className="btn-primary rounded px-3 py-2 text-sm">
          Download Resume
        </a>
      }
    >

      {isClient ? (
        <div className="border border-wf-p rounded overflow-hidden mt-4">
          <iframe src="/resume_purple.pdf" className="w-full h-[800px]" style={{ backgroundColor: "#1b1b1b", border: "none" }} title="Resume PDF" />
        </div>
      ) : (
        <div className="h-64 flex items-center justify-center">Loading preview…</div>
      )}
    </PageShell>
  );
}
