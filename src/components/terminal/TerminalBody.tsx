"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Prompt from "./Prompt";
import { executeCommand } from "@/commands/commandExcecutor";
import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import TerminalOutputRenderer from "./TerminalOutputRenderer";

type TerminalBodyProps = {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
};

export default function TerminalBody({ inputRef }: TerminalBodyProps) {
  const [command, setCommand] = useState("");
  const [outputHistory, setOutputHistory] = useState<CommandResult[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const terminalReceiver = useMemo(
    () => new TerminalReceiver(setOutputHistory),
    [setOutputHistory]
  );

  useLayoutEffect(() => {
     if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
     }
  }, [outputHistory]);

  function handlePromptSubmit() {

    if (command?.trim() === "") return;
    const commandResult = executeCommand(command, terminalReceiver);

    if (commandResult.data !== undefined) {
      setOutputHistory((prevHistory) => [...prevHistory, commandResult]);
    }

    setCommand("");
  }

  return (
    <div
    ref={scrollRef}
    className="h-150 p-6 font-mono text-green-400 whitespace-pre-wrap wrap-break-word overflow-y-auto">
      <p>Welcome to my portfolio.</p>
      <p>Type "help" to see available commands.</p>

      {outputHistory.map((output, index) => (
        <TerminalOutputRenderer output={output} key={index}  />
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