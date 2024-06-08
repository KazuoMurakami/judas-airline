"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaginationDemo } from "@/components/pagination/pagination";
import { useSearchParams } from "next/navigation";

export const country = [
  {
    id: 1,
    country: "Canada",
    city: "Toronto",
    price: 4000.0,
    url: "/imgCity/toronto.jpg",
  },
  {
    id: 2,
    country: "Grecia",
    city: "Míconos",
    price: 3000.0,
    url: "/imgCity/grecia.jpeg",
  },
  {
    id: 3,
    country: "Alemanha",
    city: "Colonia",
    price: 2000.0,
    url: "/imgCity/alemanha.jpg",
  },
  {
    id: 4,
    country: "Reino Unido",
    city: "Londres",
    price: 4500.0,
    url: "/imgCity/reinoUnido.png",
  },
  {
    id: 5,
    country: "Brazil",
    city: "Rio de janeiro",
    price: 1500.0,
    url: "/imgCity/rio.jpg",
  },
  {
    id: 6,
    country: "Italia",
    city: "Roma",
    price: 4500.0,
    url: "/imgCity/italia.jpeg",
  },
  {
    id: 7,
    country: "França",
    city: "Paris",
    price: 6500.0,
    url: "/imgCity/franca.jpg",
  },
  {
    id: 8,
    country: "México",
    city: "Cidade do México",
    price: 4000.0,
    url: "/imgCity/mexico.jpg",
  },
  {
    id: 9,
    country: "Estados Unidos",
    city: "Nova York",
    price: 7000.0,
    url: "/imgCity/estados-unidos.jpg",
  },
  {
    id: 10,
    country: "Austrália",
    city: "Sydney",
    price: 6800.0,
    url: "/imgCity/australia.jpg",
  },
  {
    id: 11,
    country: "Argentina",
    city: "Buenos Aires",
    price: 3000.0,
    url: "/imgCity/argentina.jpg",
  },
  {
    id: 12,
    country: "África do Sul",
    city: "Cidade do Cabo",
    price: 4200.0,
    url: "/imgCity/africa.jpg",
  },
]; // array com informação estatica dos países

export default function Voos() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = country.slice(start, end);
  return (
    <div className="flex gap-4 flex-wrap justify-center mt-10 rounded">
      {/* percorre a array country e cria um componente de cada país */}
      {entries.map((city) => {
        return (
          <div
            className="flex flex-col *:bg-[#13771D] *:text-white h-[600px]"
            key={city.id}
          >
            <Image
              src={city.url}
              width={500}
              height={300}
              className="rounded-t-lg h-[300px]"
            />
            <div className="flex flex-col">
              <div className=" flex justify-around pt-4">
                <span>
                  {city.country}, {city.city}
                </span>
                <span>R${city.price}</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="flex py-5 ">10 dias de viagem</span>
                <Link href={`/Voos/Pagamentos?price=${city.price}`}>
                  <Button>Agende sua viagem!</Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <PaginationDemo />
    </div>
  );
}
