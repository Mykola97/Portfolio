import { TerminalReceiver } from "@/components/terminal/TerminalReceiver";
import { Command } from "@/types/command";
import Image from "next/image";

export const aboutCommand: Command = {
  name: "about",
  description: "Show information about me",

  execute(terminalReceiver: TerminalReceiver): void {
    const output: React.ReactElement = (
      <div className="flex flex-col gap-4">
        <br />
        <div className="flex items-start gap-4">
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            width={100}
            height={100}
            className="shrink-0"
          />

          <p>
            Hello! I'm Mykola, Full-Stack Software Developer with 7 years of
            experience in the fintech industry, specializing in payment systems.
            Expertise in JavaScript, Node.js, Python and Java, with strong
            experience in front-end and back-end development, API integration,
            and optimization of transaction processing systems and banking APIs.
          </p>
        </div>

        <p>
          I enjoy designing scalable backend systems, building intuitive frontends
          and improving developer experience.
        </p>

        <div>
          <p className="mb-2">Currently interested in:</p>

          <ul className="list-disc pl-6">
            <li>React & Next.js for frontend development</li>
            <li>Node.js, Java, Python for backend development</li>
            <li>Distributed systems</li>
            <li>System design</li>
            <li>Developer tooling</li>
          </ul>
        </div>

        <p>
          Outside of work I enjoy learning French, reading about software
          architecture, building side projects and play chess.
        </p>

      </div>
    );

    terminalReceiver.write(output);
  }
};