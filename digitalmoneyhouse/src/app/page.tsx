import CardInfoHome from "@/components/cards/CardInfoHome";

export default function Home() {
  return (
    <div className="w-full h-auto bg-bg-img-mobile bg-cover space-y-32">
      <section className="ml-4">
        <p className="w-6/12 text-total-white text-2xl font-semibold pt-8">De ahora en adelante,<br />hacés más con tu dinero</p>
        <hr className="underline my-2 w-5 text-total-primary border-2"/>
        <h5 className="text-total-primary text-lg">Tu nueva <br /><span className="font-semibold">billetera virtual</span> </h5>
      </section>
      <section className="h-1/2">
        <div className="bg-total-primary w-full rounded-t-3xl">
          <div className="space-y-4 flex flex-col items-center -translate-y-16  ">
            <CardInfoHome
              title="Transferí dinero"
              paragraph='Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.'
            />
            <CardInfoHome
              title="Pago de servicios"
              paragraph='Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel.'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

