import { useState } from "react";

export default function TerminalBody() {

    const [input, setInput] = useState("");

    return (
        <div className="min-h-[600px] p-6 font-mono text-green-400">
        <p>Welcome to my portfolio.</p>
        <p>Type "help" to see available commands.</p>

        <div className="mt-6">
          <span className="text-blue-400">kolya@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ </span>

          <span className="ml-2 h-5 w-2 animate-pulse bg-green-400">
            <input
                className="absolute opacity-0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
          </span>
        </div>
      </div>
    )
}