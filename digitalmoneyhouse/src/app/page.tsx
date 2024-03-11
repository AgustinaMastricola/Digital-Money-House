import Image from "next/image";
import portada from "../../public/portada.png";

export default function Home() {
  return (
    <div className="w-full h-screen bg-bg-img-mobile bg-cover">
      <div className="ml-4">
        <p className="w-6/12 text-total-white text-2xl  font-semibold pt-8">De ahora en adelante,<br />hacés más con tu dinero</p>
        <hr className="underline my-2 w-5 text-total-primary border-2"/>
        <h5 className="text-total-primary text-lg">Tu nueva <br /><span className="font-semibold">billetera virtual</span> </h5>
      </div>
    </div>
  );
}

