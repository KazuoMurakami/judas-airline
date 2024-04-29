import Link from "next/link";
import Image from "next/image";
export default function Navheader() {
  return (
    <header className="flex gap-4 justify-between items-center mx-20 mt-10 ">
      <Image src="/logo.png" width={300} height={300} alt="logo" />
      <div className="flex justify-around md:w-[300px] font-bold">
        <Link href="/">Voos</Link>
        <Link href="/">Hotel</Link>
        <Link href="/">Planos</Link>
      </div>
    </header>
  );
}
