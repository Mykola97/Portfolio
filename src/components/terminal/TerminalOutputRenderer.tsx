
import Image from "next/image";

export default function TerminalOutputRenderer({ output, id }: { output: CommandResult, id: number }) : React.ReactElement {
  switch (output.type) {
    case "text":
      return <div className="text-green-400" key={id}>
          {output.data}
      </div>;
    case "image":
      return <Image
        src={output.data as string}
        alt="Output"
        width={300}
        height={400}
        key={id}
        className="w-[30%] h-[40%]"
      />;
    case "projects":
    case "skills":
    default:
        return assertNever(output);
  }

  function assertNever(x: CommandResult): never {
      throw new Error("Unexpected object: " + x);
  }
}