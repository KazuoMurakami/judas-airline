import Image from "next/image";
export default function Destaque() {
  return (
    <div className="mt-96">
      <h1 className="flex justify-center text-4xl text-black font-bold ">
        Viagens em Destaques
      </h1>
      <div className="flex justify-center  gap-28 *:bg-[#13771D] *:text-white">
        <div className=" rounded-t-lg">
          <Image
            src="/canada.jpg"
            width={300}
            height={300}
            className="rounded-t-lg"
          />
          <div className=" flex justify-around pt-4">
            <span>Canada</span>
            <span>R$5420.00</span>
          </div>
          <span className="flex py-5 justify-center">10 dias de viagem</span>
        </div>
        <div className="rounded-t-lg">
          <Image
            src="/irlanda.jpg"
            width={300}
            height={300}
            className="rounded-t-lg"
          />
          <div className=" flex justify-around pt-4">
            <span>Irlanda</span>
            <span>R$6100.00</span>
          </div>
          <span className="flex py-5 justify-center">14 dias de viagem</span>
        </div>
        <div className="rounded-t-lg">
          <Image
            src="/japan.jpg"
            width={300}
            height={300}
            className="rounded-t-lg"
          />
          <div className=" flex justify-around pt-4">
            <span>Japão</span>
            <span>R$4800.00</span>
          </div>
          <span className="flex py-5 justify-center">10 dias de viagem</span>
        </div>
      </div>
    </div>
  );
}
