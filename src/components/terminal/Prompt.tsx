"use client";
import { KeyboardEvent, useRef } from "react";
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


  return (
    <div className="flex items-center font-mono">

      <div>nick@portfolio:~$ {value}
        <Caret />
      </div>


      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={true}
        className="absolute opacity-0"
      />
    </div>
  );
}