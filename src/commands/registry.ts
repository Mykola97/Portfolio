import { Command } from "@/types/command";
import { helpCommand } from "./help";
import { clearCommand } from "./clear";
import { aboutCommand } from "./about";

export const commands: Command[] = [
    aboutCommand,
    helpCommand,
    clearCommand,
];

