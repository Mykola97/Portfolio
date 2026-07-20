"use client";
import { KeyboardEvent, useRef, useState } from "react";
import { Caret } from "./Caret";
import { useCommandHistory } from "../hooks/useCommandHistory";

type PromptProps = {
  command: string;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  onChange: (command: string) => void;
  onSubmit: () => void;
};

export default function Prompt({
  command,
  inputRef,
  onChange,
  onSubmit
}: PromptProps) {

  const {
    addCommand,
    previous,
    next
  } = useCommandHistory();

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        if (command.trim() === "") return;
        addCommand(command);
        onSubmit();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevCommand = previous();
        if (prevCommand !== undefined)
          onChange(prevCommand);
        break;
      case "ArrowDown":
        e.preventDefault();
        const nextCommand = next();
        onChange(nextCommand ?? "");
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

        <span className="text-white">{command}</span>
        <Caret />
      </div>


      <textarea
        ref={inputRef}
        value={command}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={true}
        onKeyDown={handleKeyDown}
        className="fixed top-0 left-0 w-px h-px opacity-0"
      />
    </div>
  );
}