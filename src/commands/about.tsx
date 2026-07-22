import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";
import Image from "next/image";

export const aboutCommand: Command = {
  name: "about",
  description: "Show information about me",
  descriptionKey: "commands.about.description",

  execute(terminalReceiver: TerminalReceiver): void {
    const t = terminalReceiver.translate;
    const output: React.ReactElement = (
      <div className="flex flex-col gap-4">
        <br />
        <div className="flex items-start gap-4">
          <Image
            src="/images/profile.png"
            alt={t("Profile Picture", "commands.about.imgAlt")}
            width={100}
            height={100}
            className="shrink-0 !h-[120px] !w-[120px]"
          />

          <p>
            {t("If you see it, ask me to fix :)","commands.about.summary")}
          </p>
        </div>

        <p>
          {t("If you see it, ask me to fix :)", "commands.about.firstBlock")}
        </p>

        <div>
          <p className="mb-2">{t("Currently interested in:", "commands.about.secondBlock")}</p>

          <ul className="list-disc pl-6">
            <li>{t("React & Next.js for frontend development", "commands.about.skills.frontend")}</li>
            <li>{t("Node.js, Java, Python for backend development", "commands.about.skills.backend")}</li>
            <li>{t("Distributed systems", "commands.about.skills.distributedSystems")}</li>
            <li>{t("System design", "commands.about.skills.systemDesign")}</li>
            <li>{t("Developer tooling", "commands.about.skills.tooling")}</li>
          </ul>
        </div>

        <p>
          {t("If you see it, ask me to fix :)", "commands.about.hobby")}
        </p>

      </div>
    );

    terminalReceiver.write(output);
  }
};