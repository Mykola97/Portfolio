import { TerminalReceiverInterface } from './TerminalReceiverInterface';

type SetHistory = React.Dispatch<React.SetStateAction<string[]>>;
export class TerminalReceiver implements TerminalReceiverInterface {
    constructor(private setOutputHistory: SetHistory) {}

    clearOutput() {
        this.setOutputHistory([]);
    }

    openUrl(url: string) {
        //pass
    }

    downloadFile(url: string) {
        //pass
    }
}