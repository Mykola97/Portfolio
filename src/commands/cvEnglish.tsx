import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";

export const cvCommand: Command = {
  name: "cvEnglish",
  description: "Open my CV in English",
  descriptionKey: "commands.cvEnglish.descripotion",
  
  execute(terminalReceiver: TerminalReceiver): void {
  }
}