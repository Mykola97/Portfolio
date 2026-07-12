import Image from "next/image";
import Terminal from "@/components/terminal/Terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-8">
      <Terminal />
    </main>
  );
}
