"use client";

export default function TerminalHeader() {
  return (
      <div className="flex items-center rounded-xl gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-zinc-400">
          mykola@portfolio:~
        </span>
      </div>
  );
}