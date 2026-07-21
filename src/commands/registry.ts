import { Command } from "@/types/command";
import { helpCommand } from "@/commands/help";
import { clearCommand } from "@/commands/clear";
import { aboutCommand } from "@/commands/about";
import { cvFranchCommand } from "@/commands/cvFranch";

export const commands: Command[] = [
    aboutCommand,
    helpCommand,
    cvFranchCommand,
    clearCommand,
];

