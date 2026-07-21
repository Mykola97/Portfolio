import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";

export const projectsCommand: Command = {
    name: "projects",
    description: "Show my projects",
    execute(terminalReceiver: TerminalReceiver): void {
        
    }
}