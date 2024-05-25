import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function FooterPage() {
  return (
    <footer className="*:flex items-center flex justify-around *:gap-8">
      <div>
        <Link href="/">
          <RiInstagramFill className="size-8" />
        </Link>
        <Link href="/">
          <FaSquareXTwitter className="size-8" />
        </Link>
        <Link href="/">
          <FaFacebook className="size-8" />
        </Link>
      </div>
      <div className="*:font-bold text-[#13771D] my-10">
        <Link href="/">Empresa</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Mais</Link>
      </div>
    </footer>
  );
}
