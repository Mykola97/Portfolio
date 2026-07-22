import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";

export const projectsCommand: Command = {
  name: "projects",
  description: "Show my projects",
  descriptionKey: "commands.projects.description",

  execute(terminalReceiver: TerminalReceiver): void {
    const t = terminalReceiver.translate;

    const output = (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">{t("Foree Remittance (Nanopay)", "commands.projects.firstProject.title")}</h3>
        <p>
          {t("If you see this let me know :)", "commands.projects.firstProject.description")}
        </p>
        <h3 className="text-lg font-bold">{t("Terminal Portfolio (Personal)", "commands.projects.secondProject.title")}</h3>
        <p>
          {t("If you see this let me know :)", "commands.projects.secondProject.description")}
        </p>
        <h3 className="text-lg font-bold">{t("Bus Booking website (Personal)", "commands.projects.thirdProject.title")}</h3>
        <p>
          {t("If you see this let me know :)", "commands.projects.thirdProject.description")}
        </p>
      </div>
    )
    terminalReceiver.write(output);
  }
}