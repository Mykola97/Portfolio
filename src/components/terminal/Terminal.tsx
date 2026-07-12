"use client";

import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

export default function Terminal() {
  return (
    <div className="w-full max-w-5xl rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl">
        <TerminalHeader />
        <TerminalBody />
    </div>
  );
}