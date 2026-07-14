import { commands } from "./registry";

export function executeCommand(input: string) {
  const command = commands.find(
    (command) => command.name === input
  );

  if (!command) {
    return `Command not found: ${input}`;
  }

  return command.execute();
}