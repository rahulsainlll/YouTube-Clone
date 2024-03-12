import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard />
    </div>
  );
}


// I spent a day researching about the 2024 coding job market

