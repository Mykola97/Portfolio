import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";

export const cvFranchCommand: Command = {
  name: "cvFrance",
  description: "Open my CV in French",
    execute(terminalReceiver: TerminalReceiver): void {
      terminalReceiver.openUrl("/documents/KolomberFR.pdf");
    }
}