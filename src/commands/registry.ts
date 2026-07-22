import { Command } from "@/types/command";
import { helpCommand } from "@/commands/help";
import { clearCommand } from "@/commands/clear";
import { aboutCommand } from "@/commands/about";
import { cvFranchCommand } from "@/commands/cvFranch";
import { projectsCommand } from "@/commands/projects";

export const commands: Command[] = [
    aboutCommand,
    helpCommand,
    projectsCommand,
    cvFranchCommand,
    clearCommand,
];

