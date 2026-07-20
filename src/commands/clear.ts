import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";

export const clearCommand: Command = {
  name: "clear",
  description: "Clear the terminal output",

  execute(terminalReceiver: TerminalReceiver) : void {
    terminalReceiver.clearOutput();
  }
};