import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Voos() {
  const country = [
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
      url: "/imgCity/reinoUnido.png",
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
    </div>
  );
}
