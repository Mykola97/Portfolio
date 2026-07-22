export interface TerminalReceiverInterface {
    clearOutput: () => void;
    openUrl: (url: string) => void;
    downloadFile: (path: string, url: string) => void;
    write: (output: React.ReactNode) => void;
    excecuteCommand: (command: string) => void;
    inputCommand: (command: string) => Promise<void>;
}