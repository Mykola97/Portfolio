import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";
import React from "react";

export const contactsCommand: Command = {
    name: "contacts",
    description: "Show my contacts",

    execute(terminalReceiver: TerminalReceiver): void {
        const output: React.ReactElement = (

        );
        terminalReceiver.write(output);
    }
}