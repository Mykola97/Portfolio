"use client";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Prompt from "./Prompt";
import { executeCommand } from "@/commands/commandExcecutor";
import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import React from "react";
import { I18nContext } from "@/locales/I18nContext";

type TerminalBodyProps = {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
};

export default function TerminalBody({ inputRef }: TerminalBodyProps) {
  const [command, setCommand] = useState("");
  const [outputHistory, setOutputHistory] = useState<React.ReactNode[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error("Context not provided");
  }
  const { t } = context;

  const terminalReceiver = useMemo(
    () => new TerminalReceiver(setOutputHistory, setCommand, t),
    [setOutputHistory, setCommand, t]
  );

  useLayoutEffect(() => {
     if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
     }
  }, [outputHistory]);

  function handlePromptSubmit() {

    if (command?.trim() === "") return;

    executeCommand(command, terminalReceiver);

    setCommand("");
  }

  return (
    <div
    ref={scrollRef}
    className="h-150 p-6 font-mono text-green-400 whitespace-pre-wrap wrap-break-word overflow-y-auto terminal-scroll">
      <p>Welcome to my portfolio.</p>
      <p>Type "<button
                className="
                text-cyan-400
                  cursor-pointer
                  hover:underline
                  hover:text-cyan-300
                "
                onClick={() => terminalReceiver.inputCommand("help")}
              >help</button>" to see available commands. Note that all the commands from help are clickable.</p>
      
       {/* It is ok to use index as key because we add 1 element or remove all.  */}
       {/* So the order of elements will not change */}
      {outputHistory.map((output, index) => (
        <React.Fragment key={index}>
          {output}
        </React.Fragment>
      ))}

      <Prompt
        inputRef={inputRef}  
        command={command}
        onChange={setCommand}
        onSubmit={() => handlePromptSubmit()}
      />
    </div>
  )
}