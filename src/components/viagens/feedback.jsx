import Image from "next/image";
export default function Feedback() {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <h1 className="font-bold text-4xl w-[350px]">
          Oque as pessoas dizem sobre nós
        </h1>
        <Image src="/feedbackp.png" width={500} height={400} />
      </div>
      <div className="flex justify-center ">
        <Image src="/parceiros.png" width={1200} height={400} />
      </div>
    </>
  );
}
