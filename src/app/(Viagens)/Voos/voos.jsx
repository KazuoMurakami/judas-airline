import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Voos() {
  const country = [
    {
      id: 1,
      country: "Canada",
      city: "Toronto",
      price: "R$4000.00",
      url: "/imgCity/toronto.jpg",
    },
    {
      id: 2,
      country: "Grecia",
      city: "Míconos",
      price: "R$3000.00",
      url: "/imgCity/grecia.jpeg",
    },
    {
      id: 3,
      country: "Alemanha",
      city: "Colonia",
      price: "R$2000.00",
      url: "/imgCity/reinoUnido.png",
    },
    {
      id: 4,
      country: "Reino Unido",
      city: "Londres",
      price: "R$4500.00",
      url: "/imgCity/reinoUnido.png",
    },
    {
      id: 5,
      country: "Brazil",
      city: "Rio de janeiro",
      price: "R$1500.00",
      url: "/imgCity/rio.jpg",
    },
    {
      id: 6,
      country: "Italia",
      city: "Roma",
      price: "R$4500.00",
      url: "/imgCity/italia.jpeg",
    },
  ]; // array com informação estatica dos países

  return (
    <div className="flex gap-4 flex-wrap justify-center mt-10 rounded">
      {/* percorre a array country e cria um componente de cada país */}
      {country.map((city) => {
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
                <span>R$5420.00</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="flex py-5 ">10 dias de viagem</span>
                <Link href="/Voos/Pagamentos">
                  <Button clas>Agende sua viagem!</Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
