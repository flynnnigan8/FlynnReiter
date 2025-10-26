import React from "react";

type PageShellProps = Readonly<{
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}>;

export default function PageShell({ title, children, actions }: PageShellProps) {
  return (
    <div className="prose max-w-none">
      <header className="mb-4 flex items-center justify-between gap-4">
  <h1 className="text-2xl font-medium" style={{ color: "var(--foreground)" }}>{title}</h1>
        {actions ? <div className="ml-4">{actions}</div> : null}
      </header>
      <div className="mt-2">{children}</div>
    </div>
  );
}
