import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navheader from "@/components/header/nav-header";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Navheader />
        <Image
          src="/Decore.png"
          width={800}
          height={800}
          className="absolute bottom-[-400px] right-[-100px] -z-10"
        />
      </section>
    </>
  );
}
