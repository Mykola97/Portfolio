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
  const historyIndexRef = useRef<number>(-1);

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        if (value.trim() === "") return;
        setHistory((prevHistory) => {
          historyIndexRef.current = prevHistory.length + 1;
          return [...prevHistory, value]
        });
        onSubmit();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (history.length > 0 && historyIndexRef.current > 0) {
          historyIndexRef.current = historyIndexRef.current - 1;
          const previousCommand = history[historyIndexRef.current];
          onChange(previousCommand);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (historyIndexRef.current < history.length) {
          historyIndexRef.current = historyIndexRef.current + 1;
          const nextCommand = history[historyIndexRef.current];
          onChange(nextCommand);
        } else if (historyIndexRef.current === history.length) {
          onChange("");
        }
        break;
      default:
        break;
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