"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useSearchParams, useRouter } from "next/navigation";

export function PaginationDemo() {
  const searchParams = useSearchParams(); // pega o parametro da url
  const router = useRouter(); //pega a rota da url

  const page = searchParams.get("page") ?? "1"; // se o paramtro for igual a page muda a pagina para o numero selecionado se não vai para 1
  const per_page = searchParams.get("per_page") ?? "6"; // defina a quantidade de item por pagina
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={page == 1 ? "pointer-events-none" : ""}
              onClick={() => {
                router.push(
                  `/Voos/?page=${Number(page) - 1}&per_page=${per_page}`
                  // retorna as paginas conforme a logica acima de number - 1
                );
              }}
            />
          </PaginationItem>
          {page} / {Math.ceil(9 / Number(per_page))}
          {/* mostra as pagina atual e quantas tem */}
          <PaginationItem>
            <PaginationNext
              className={
                page == Math.ceil(9 / Number(per_page))
                  ? "pointer-events-none"
                  : ""
              }
              onClick={() => {
                router.push(
                  `/Voos/?page=${Number(page) + 1}&per_page=${per_page}`
                  // avança a pagina conforme logica acima de number + 1
                );
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
