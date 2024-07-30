import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";

export default function Home() {
  return (
    <main
      className="flex
   flex-col items-center"
    >
      <h1 className="text-5xl font-bold">User find App</h1>
      <Input />
    </main>
  );
}
