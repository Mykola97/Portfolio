export interface Command {
  name: string;
  description: string;
  execute: () => string;
}