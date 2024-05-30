import Image from "next/image";
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
    price: "R$4000.00",
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
    price: "R$3500.00",
  },
  {
    logo: "/hotels/japao.jpg",
    descricao: {
      nome: "Hotel Kyoto",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: "Oikeno-cho 314, Oshikoji-sagaru Muromachi-dori,",
    },
    price: "R$2000.00",
  },
  {
    logo: "/hotels/brasil.webp",
    descricao: {
      nome: "Hotel Rio",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: "Serrão, Vila Mariana, Sao Paulo",
    },
    price: "R$1500.00",
  },
  {
    logo: "/hotels/irlanda.webp",
    descricao: {
      nome: "Weebing",
      tipo: "Hotel",
      avaliacao: "5 estrelas",
      local: " Mary Street Little, Dublin, Ireland",
    },
    price: "R$3520.00",
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
        {/* percorre a array hoteis e renderiza cada hotel indicado */}
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
                    <h1 className="font-bold text-xl">A partir de R$300.00</h1>
                    <span className="font-semibold">Parcele em até 12x</span>
                  </div>
                  <span className="mt-4">{hotel.descricao.local}</span>

                  <div className="justify-end items-center flex flex-1">
                    <Button>Agendar</Button>
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
