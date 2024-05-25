import Image from "next/image";
export default function Destaque() {
  return (
    <div className="flex gap-28 flex-col">
      <div className="mt-96">
        <h1 className="flex justify-center text-4xl text-black font-bold mb-10">
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
            <div className=" flex justify-around pt-4 flex-wrap">
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
            <div className=" flex justify-around pt-4 flex-wrap">
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
            <div className=" flex justify-around pt-4 flex-wrap">
              <span>Japão</span>
              <span>R$4800.00</span>
            </div>
            <span className="flex py-5 justify-center">10 dias de viagem</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl w-[350px] font-bold">
            Reserve sua próxima viagem em 3 passos fáceis
          </h1>
          <li className="text-2xl font-semibold">Selecione a viagem</li>
          <li className="text-2xl font-semibold">Escolha o pacote</li>
          <li className="text-2xl font-semibold">E finalize a reserva!</li>
        </div>
        <Image src="/grecia.png" width={500} height={400} alt="icone grecia" />
      </div>
    </div>
  );
}
