import { Button } from "@/components/ui/button";
import Image from "next/image";
import Destaque from "@/components/viagens/destaque";
import Navheader from "@/components/header/nav-header";
import Feedback from "@/components/viagens/feedback";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navheader />
        <Image
          src="/Decore.png"
          width={800}
          height={800}
          className="absolute bottom-[-400px] right-[-100px] -z-10"
        />
      </div>
      <div className="flex mt-10">
        <div className="w-[600px]">
          <span className="text-[#4da768] font-semibold text-lg">
            EXPERIENCIE OQUE O CÉU TE PROPORCIONA
          </span>
          <h1 className="text-6xl font-bold my-5">
            Transforme sonhos em destinos
          </h1>
          <span className="text-[#4da768] font-semibold text-2xl">
            Construa seu destino da melhor maneira com a nossa companhia Judas
            Airline e experencie os melhores preços e benefícios que
            proporcionamos.
          </span>
          <Button className="bg-[#006633] mt-10">Descubra mais</Button>
        </div>
        <Image
          src="/girl.png"
          width={300}
          height={300}
          alt="girl"
          className="absolute top-[200px] right-[50px] md:right-[200px]"
        />
      </div>
      <Destaque />
      <Feedback />
      <div className="flex justify-center">
        <Image src="/parceiros.png" width={1200} height={400} />
      </div>
    </>
  );
}
