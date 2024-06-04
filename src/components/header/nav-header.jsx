import Link from "next/link";
import Image from "next/image";
export default function Navheader() {
  return (
    <header className="flex gap-4 justify-center items-center md:justify-between">
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="logo"
        className="hidden md:block"
      />
      <div className="flex justify-around font-bold gap-20">
        <Link href="/Voos">Voos</Link>
        <Link href="/Hotel">Hotel</Link>
      </div>
    </header>
  );
}
