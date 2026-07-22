import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";

export interface Command {
  name: string;
  description: string;
  // Used for translateion
  descriptionKey?: string;
  execute(receiver: TerminalReceiver): void;
}