"use client";
import { KeyboardEvent, useRef, useState } from "react";
import { Caret } from "./Caret";

type PromptProps = {
  value: string;
inputRef: React.RefObject<HTMLTextAreaElement | null>;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export default function Prompt({
  value,
  inputRef,
  onChange,
  onSubmit
}: PromptProps) {

  const [history, setHistory] = useState<string[]>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      setHistory((prevHistory) => [...prevHistory, value]);
      onSubmit();
    }
  }

  return (
    <div className="flex items-center font-mono">

      <div className="w-full font-mono whitespace-pre-wrap break-all">
        <span className="text-green-400">mykola</span>
        <span className="text-white">@</span>
        <span className="text-blue-400">portfolio</span>
        <span className="text-white">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-white">$ </span>

        <span className="text-white">{value}</span>
        <Caret />
      </div>


      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={true}
        onKeyDown={handleKeyDown}
        className="fixed top-0 left-0 w-px h-px opacity-0"
      />
    </div>
  );
}