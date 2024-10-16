import { useEffect, useState } from "react"
import Container from "../common/containers/Container"
import { ServiceType } from "@/types/service.types"
import servicesAPI from "@/services/service/service.service"
import Image from "next/image"
import Button from "../common/buttons/Button"
import { usePathname } from "next/navigation"

type ListServicesProps = {
  valueInputSearch: string | null
}

const ListServices = ({valueInputSearch}:ListServicesProps) => {
  const [allServices, setAllServices] = useState<ServiceType[]>([]);
  const [listServices, setListServices] = useState<ServiceType[]>([]);
  const location = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const data = await servicesAPI.getAllServices();
      setAllServices(data);
      setListServices(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (valueInputSearch !== null && valueInputSearch !== "") {
      const filtered = allServices.filter((service) => {
        return (
          typeof service.name === "string" &&
          typeof valueInputSearch === "string" &&
          service.name.toLowerCase().includes(valueInputSearch.toLowerCase())
        );
      });
      setListServices(filtered);
    } else {
      setListServices(allServices);
    }
  }, [valueInputSearch, allServices]);

  return (
    <>
      <Container className="border border-total-gray border-opacity-15 bg-total-white drop-shadow-2xl md:px-4 w-full flex flex-col items-start pt-3 my-4">
        {listServices && listServices.length > 0 && 
          listServices.map((service, index) =>(
            <div key={`${service.name}-${index}`} className="w-full">
              <div className="w-full flex justify-between items-center border-b border-total-gray border-opacity-15 py-3 px-3">
                <div className="flex items-center">
                  <Image src={`/servicesIcons/${service.name}.png`} alt={`Logo ${service.name}`} width={70} height={40}/>
                  <span className="text-sm text-footer-gray md:text-base ml-6">{service.name}</span>
                </div>
                <div className="flex items-center">
                  <Button 
                    className="text-xs md:text-base font-bold border-none" 
                    title={"Seleccionar"} 
                    asLink={true} 
                    href={
                      location === '/dashboard/servicios' ? `/dashboard/servicios/pagar/${service.id}` : `/dashboard/servicios/pagar/${service.id}`
                    }/>
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