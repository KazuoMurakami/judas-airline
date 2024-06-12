"use client";

import { Toaster } from "@/components/ui/toaster";
import FooterPage from "@/components/viagens/footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Dashboard({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex gap-16 bg-[#4DA768] w-full h-[50px] items-center justify-end pr-28 text-white ">
        {/* logica para quando eu clicar em uma rota, o link dela mude para eu não me redirecioanar pra mesma rota */}
        <Link href={pathname === "/Voos" ? "/" : "/Voos"}>
          {pathname === "/Voos" ? "Home" : "Voos"}
        </Link>
        <Link href={pathname === "/Hotel" ? "/" : "/Hotel"}>
          {pathname === "/Hotel" ? "Home" : "Hotel"}
        </Link>
      </div>
      {children}

      <FooterPage />
    </>
  );
}
