"use client";
import { useState } from "react";
import Prompt from "./Prompt";
import { executeCommand } from "@/commands/commandExcecutor";

type TerminalBodyProps = {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
};

export default function TerminalBody({ inputRef }: TerminalBodyProps) {
  const [command, setCommand] = useState("");
  const [outputHistory, setOutputHistory] = useState<string[]>([]);

  function handlePromptSubmit() {
    let output: string;

    if (command.trim() === "") return;
    output = executeCommand(command);

    setOutputHistory((prevHistory) => [...prevHistory, output]);
    setCommand("");
  }
  return (
    <div className="min-h-[600px] p-6 font-mono text-green-400 whitespace-pre-wrap break-words">
      <p>Welcome to my portfolio.</p>
      <p>Type "help" to see available commands.</p>

      {outputHistory.map((output, index) => (
        <div key={index} className="text-green-400">
          {output}
        </div>
      ))}

      <Prompt
        inputRef={inputRef}  
        value={command}
        onChange={setCommand}
        onSubmit={() => handlePromptSubmit()}
      />
    </div>
  )
}