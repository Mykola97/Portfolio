"use client";
import { useState } from "react";
import Prompt from "./Prompt";

type TerminalBodyProps = {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
};

export default function TerminalBody({ inputRef }: TerminalBodyProps) {
  const [command, setCommand] = useState("");

  return (
    <div className="min-h-[600px] p-6 font-mono text-green-400">
      <p>Welcome to my portfolio.</p>
      <p>Type "help" to see available commands.</p>

      <Prompt
        inputRef={inputRef}  
        value={command}
        onChange={setCommand}
        onSubmit={() => console.log(command)}
      />
    </div>
  )
}