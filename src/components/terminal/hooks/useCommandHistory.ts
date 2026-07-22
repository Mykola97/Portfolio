import { useRef, useState } from 'react';

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const historyIndexRef = useRef<number>(0);

  function addCommand(command: string) {
    setHistory((prevHistory) => {
      historyIndexRef.current = prevHistory.length + 1;
      return [...prevHistory, command]
    });
  }

  function previous(): string | undefined {
    if (history.length > 0 && historyIndexRef.current > 0) {
      historyIndexRef.current = historyIndexRef.current - 1;
      const previousCommand = history[historyIndexRef.current];
      return previousCommand;
    }
    return;
  }

  function next(): string | undefined {
    if (historyIndexRef.current < history.length) {
      historyIndexRef.current = historyIndexRef.current + 1;
      const nextCommand = history[historyIndexRef.current];
      return nextCommand;
    } 
    return;
  }

  return {
    addCommand,
    previous,
    next
  };
}