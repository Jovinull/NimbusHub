"use client";

import { useEffect, useState } from "react";

interface ValueBoxProps {
  data: number | null;
  title: string;
  unit?: string;
}

export default function ValueBox({ data, title, unit = "" }: ValueBoxProps) {
  const [value, setValue] = useState(25); // Valor padrão inicial

  useEffect(() => {
    if (data !== null) {
      setValue(data);
    }
  }, [data]);

  return (
    <div className="p-6 rounded-xl shadow-lg text-center transition-all" style={{ backgroundColor: "var(--chart-bg)" }}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{value}{unit}</p>
    </div>
  );
}
