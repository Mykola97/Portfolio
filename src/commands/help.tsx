import { Command } from "@/types/command";
import { commands } from "@/commands/registry";
import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";

export const helpCommand: Command = {
  name: "help",
  description: "Show available commands",
  descriptionKey: "commands.help.description",

  execute(terminalReceiver: TerminalReceiver): void {
    let output = commands
      .map(
        (command) => {
          return (
            <div key={crypto.randomUUID()}>
              <button
                className="cursor-pointer"
                onClick={() => terminalReceiver.inputCommand(command.name)}
              >
                <span
                  className="
                    inline-block
                    w-24
                    text-left
                    text-cyan-400
                    hover:underline
                    hover:text-cyan-300
                  "
                >
                  {command.name}
                </span>
              </button>
              - {terminalReceiver.translate(command.description, command.descriptionKey)}
            </div>
          )
        });

    terminalReceiver.write(output);
  }
};