import { Command } from "@/types/command";
import { commands } from "@/commands/registry";

export const helpCommand: Command = {
  name: "help",
  description: "Show available commands",

  execute(): CommandResult {
    return {
      type: "text",
      data: commands
        .map(
          (command) =>
            `${command.name.padEnd(10)} - ${command.description}`
        )
        .join("\n")
    };
  }
};