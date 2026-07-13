"use client";

import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";
import { useRef } from "react";

export default function Terminal() {
  // terminal focus ref
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div 
      className="w-full max-w-5xl rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl"
      onClick={focusInput}
    >
        <TerminalHeader />
        <TerminalBody inputRef={inputRef} />
    </div>
  );
}