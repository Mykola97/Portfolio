import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { commands } from "./registry";

export function executeCommand(input: string, terminalReceiver: TerminalReceiver): CommandResult {
  const command = commands.find(
    (command) => command.name === input
  );

  if (!command) {
    return {
      output: `Command not found: ${input}`
    };
  }

  return command.execute(terminalReceiver);
}