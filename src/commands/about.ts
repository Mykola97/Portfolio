import { Command } from "@/types/command";

export const aboutCommand: Command = {
  name: "about",
  description: "Show information about me",

  execute(): CommandResult {
    return {
        type: "image",
        data: "/images/profile.png"
        // data: "<img src='/images/profile.jpg' alt='Profile Picture' width='100' height='100' />\n\n" +
        //         "Hello! I'm Mykola, a passionate software developer with experience in building web applications using modern technologies. I enjoy creating efficient and user-friendly solutions.\n\n"
    };
  }
};