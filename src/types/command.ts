import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";

export interface Command {
  name: string;
  description: string;
  execute(receiver: TerminalReceiver): void;
}