import { useEffect, useState } from "react"
import Container from "../common/containers/Container"
import { ServiceType } from "@/types/service.types"
import servicesAPI from "@/services/service/service.service"
import Image from "next/image"

const ListServices = () => {
  const [listServices, setListServices] = useState<ServiceType[]>([])
  useEffect(() => {
		const fetchData = async () => {
			const data = await servicesAPI.getAllServices();
			setListServices(data);
		};
		fetchData();
	}, []);

  return (
    <>
      <Container className="border border-total-gray border-opacity-15 bg-total-white drop-shadow-2xl w-full flex flex-col items-start pt-3 my-4">
        {listServices && listServices.length > 0 && 
          listServices.map((service, index) =>(
            <div key={`${service.name}-${index}`} className="w-full">
              <div className="w-full flex justify-between items-center border-b border-total-gray border-opacity-15 py-3 px-3">
                <div className="flex items-center">
                  <Image src={`/servicesIcons/${service.name}.png`} alt={""} width={90} height={40}/>
                  <span className="text-sm text-footer-gray md:text-base ml-6">{service.name}</span>
                </div>
                <div className="flex items-center">
                  <button className="text-sm md:text-base font-bold">Seleccionar</button>
                </div>
              </div>
            </div>
          ))
        }
      </Container>
    </>
  )
}

export default ListServices