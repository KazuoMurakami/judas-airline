import Image from "next/image";
import Voos from "./voos";

export default function Page() {
  return (
    <>
      <div className="bg-[url('/coliseu.jpg')] h-screen bg-center flex flex-col items-center gap-80">
        <Image
          src="/logo.png"
          alt="Logo"
          width="300"
          height="300"
          className="mt-10"
        />
        <div className="bg-[#13771D] w-96 h-40 opacity-85 rounded flex items-center">
          <h1 className="text-6xl font-extrabold text-white text-center">
            Viagens Disponiveis
          </h1>
        </div>
      </div>
      <Voos />
    </>
  );
}
