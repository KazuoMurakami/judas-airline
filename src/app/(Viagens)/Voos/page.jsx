import Image from "next/image";
import Voos from "./voos";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function Page() {
  return (
    <>
      <div className="bg-[url('/coliseu.jpg')] h-screen bg-center flex flex-col items-center gap-80">
        <Image
          src="/logo.png"
          alt="Logo"
          width="300"
          height="300"
          className="mt-10"
        />
        <div className="bg-[#13771D] w-96 h-40 opacity-85 rounded flex items-center">
          <h1 className="text-6xl font-extrabold text-white text-center">
            Viagens Disponiveis
          </h1>
        </div>
      </div>
      <Voos />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
