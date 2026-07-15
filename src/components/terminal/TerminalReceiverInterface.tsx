export interface TerminalReceiverInterface {
    clearOutput: () => void;
    openUrl: (url: string) => void;
    downloadFile: (url: string) => void;
}