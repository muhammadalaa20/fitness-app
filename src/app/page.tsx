import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center gap-4 overflow-hidden dark:bg-black dark:text-white">
      <Main />
    </main>
  );

}
