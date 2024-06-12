import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const hoteis = [
  {
    logo: "/hotels/canada.jpg",
    descricao: {
      nome: "Hotel CanadaPlace",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: "Hotel in The Harbourfront, Toronto",
    },
    price: 4000.0,
  },
  {
    logo: "/hotels/alemanha.webp",
    descricao: {
      nome: "Hotel Greecing",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local:
        " Friedrichstr. 96, 10117, Berlim - Alemanha 0.83 km Brandenburg Gate City center",
    },
    price: 3500.0,
  },
  {
    logo: "/hotels/japao.jpg",
    descricao: {
      nome: "Hotel Kyoto",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: "Oikeno-cho 314, Oshikoji-sagaru Muromachi-dori,",
    },
    price: 2000.0,
  },
  {
    logo: "/hotels/brasil.webp",
    descricao: {
      nome: "Hotel Rio",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: "Serrão, Vila Mariana, Sao Paulo",
    },
    price: 1500.0,
  },
  {
    logo: "/hotels/irlanda.webp",
    descricao: {
      nome: "Weebing",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: " Mary Street Little, Dublin, Ireland",
    },
    price: 3520.0,
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-[url('/resort.jpg')] h-screen bg-center flex items-center gap-80 justify-center">
        <div className="bg-[#13771D] w-96 h-40 opacity-85 rounded flex items-center">
          <h1 className="text-6xl font-extrabold text-white text-center">
            Hoteis disponiveis
          </h1>
        </div>
      </div>
      <section className="">
        {/* percorre a array hoteis e renderiza cada hotel indicado, dentro do arg hotel pega as informações do backend */}
        {hoteis.map((hotel) => {
          return (
            <div className="flex  h-[15rem] bg-white m-10">
              <Image
                src={hotel.logo}
                width={300}
                height={200}
                className=" rounded"
              />
              <div className="flex flex-1 *:flex-1 m-2">
                <div>
                  <h1 className="text-3xl font-bold">{hotel.descricao.nome}</h1>
                  <div className="mt-10 text-lg font-semibold">
                    <span>{hotel.descricao.tipo}</span>
                    <h2>{hotel.descricao.avaliacao}</h2>
                  </div>
                </div>
                <div className="bg-[#9fe4a6] rounded-md flex flex-col p-4">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl">
                      A partir de R${hotel.price}
                    </h1>
                    <span className="font-semibold">Parcele em até 12x</span>
                  </div>
                  <span className="mt-4">{hotel.descricao.local}</span>

                  <div className="justify-end items-center flex flex-1">
                    <Link href={`/Hotel/Pagamentos?price=${hotel.price}`}>
                      <Button>agendar!</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
