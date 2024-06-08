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
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";
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
                );
              }}
            />
          </PaginationItem>
          {page} / {Math.ceil(9 / Number(per_page))}
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
                );
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
