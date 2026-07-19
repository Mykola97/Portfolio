type CommandResult = {
    data?: string | string[] | undefined;
    type: "text" | "image" | "projects" | "skills" | "clear";
}