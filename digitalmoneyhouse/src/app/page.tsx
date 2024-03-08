import Image from "next/image";
import portada from "../../public/portada.png";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative ">
        <Image
          src={portada}
          alt="Imagen de portada"
          className="w-full h-[90vh] object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute top-5 ml-5">
          <p className="w-1/2 text-total-white text-xl font-bold">De ahora en adelante, hacés más con tu dinero</p>
          <hr className="underline my-2 w-5 text-total-primary  border-2"/>
          <h1 className="text-total-primary">Tu nueva billetera virtual</h1>
        </div>
      </div>
    </div>
  );
}

