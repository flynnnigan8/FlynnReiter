"use client";

import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <pre className="mt-4 text-sm">{error?.message}</pre>
    </div>
  );
}
