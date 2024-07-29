import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-total-primary py-48 px-28 h-screen flex flex-col items-center space-y-6">
      <h1 className="text-center font-bold">
        No se encontró la página a la que intenta acceder.
      </h1>
      <Link href={"/"} className="text-center text-xl uppercase bg-total-black text-total-white p-5 rounded-2xl">Volver al inicio</Link>
    </div>
  )
}
export default NotFound;
