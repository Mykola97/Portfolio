import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { commands } from "@/commands/registry";

export function executeCommand(input: string, terminalReceiver: TerminalReceiver): void {
  const command = commands.find(
    (command) => command.name === input
  );

  if (!command) {
    terminalReceiver.write(<div>Command not found: {input}</div>);
    return;
  }

  return command.execute(terminalReceiver);
}