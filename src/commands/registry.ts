import { Command } from "@/types/сommand";
import { helpCommand } from "./help";
import { clearCommand } from "./clear";

export const commands: Command[] = [
    helpCommand,
    clearCommand
];

