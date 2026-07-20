import { executeCommand } from '@/commands/commandExcecutor';
import { TerminalReceiverInterface } from './TerminalReceiverInterface';

type SetHistory = React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
type SetCommand = React.Dispatch<React.SetStateAction<string>>;
export class TerminalReceiver implements TerminalReceiverInterface {
  constructor(private setOutputHistory: SetHistory,
    private setCommand: SetCommand
  ) { }

  clearOutput(): void {
    this.setOutputHistory([]);
  }

  write(output: React.ReactNode): void {
    this.setOutputHistory((prevHistory) => [...prevHistory, output]);
  }

  excecuteCommand(command: string): void {
    console.log(`Executing command: ${command}`);
    executeCommand(command, this);
    this.setCommand("");
  }

  async inputCommand(command: string): Promise<void> {
    let current = "";

    for (const char of command) {
      current += char;
      this.setCommand(current);
      await new Promise((resolve) => setTimeout(resolve, 15));
    }

    this.excecuteCommand(current);
  }

  openUrl(url: string): void {
    //pass
  }

  downloadFile(url: string): void {
    //pass
  }
}