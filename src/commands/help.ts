import { Command } from "@/types/сommand";
import { commands } from "./registry";

export const helpCommand: Command = {
  name: "help",
  description: "Show available commands",

  execute(): CommandResult {
    return {
      output: commands
        .map(
          (command) =>
            `${command.name.padEnd(10)} - ${command.description}`
        )
        .join("\n")
    };
  }
};