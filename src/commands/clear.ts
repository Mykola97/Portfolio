import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/сommand";

export const clearCommand: Command = {
    name: "clear",
    description: "Clear the terminal output",
    
    execute(terminalReceiver: TerminalReceiver) : CommandResult {
        if (terminalReceiver) {
            terminalReceiver.clearOutput();
        }
        
        return {
            output: undefined
        };
    }
};