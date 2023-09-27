import Image from "next/image";
import Homepage from "./home/page";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  return (
    <main>
      <Homepage />
    </main>
  );
}
