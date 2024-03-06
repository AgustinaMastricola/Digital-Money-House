import Image from "next/image";
import portada from "../../public/portada.png";

export default function Home() {
  return (
    <div className="w-full">
      <Image
        src={portada}
        alt="Imagen de portada"
        className="w-full h-full"
        priority
        
      />
    </div>
  );
}

