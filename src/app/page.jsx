import { Button } from "@/components/ui/button";
import Image from "next/image";
import Destaque from "@/components/viagens/destaque";
import Navheader from "@/components/header/nav-header";
import Feedback from "@/components/viagens/feedback";
import FooterPage from "@/components/viagens/footer";

export default function Home() {
  return (
    <div className="mx-20 my-10">
      <div className="relative">
        <Navheader />
        <Image
          src="/Decore.png"
          width={800}
          height={800}
          className="absolute bottom-[-20rem] right-[-6.25rem] -z-10"
        />
      </div>
      <div className="flex mt-10 justify-center md:justify-normal">
        <div className="w-[38rem]">
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
          className="absolute top-[12.5rem] right-[8.25rem]  max-lg:hidden"
        />
      </div>
      <Destaque />
      <Feedback />
      <FooterPage />
    </div>
  );
}
