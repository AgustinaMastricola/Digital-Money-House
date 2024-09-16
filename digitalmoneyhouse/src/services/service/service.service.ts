import { ServiceInvoiceType, ServiceType } from "@/types/service.types";
const API_URL = process.env.NEXT_PUBLIC_API_URL
class ServicesAPI {
  getAllServices = async ():Promise<ServiceType[]> =>  {
    const res = await fetch(`${API_URL}service`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res.json();
  }
  getServiceByID = async (service_id:number):Promise<ServiceInvoiceType> =>  {
    const res = await fetch(`${API_URL}service/${service_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res.json();
  }
}
const servicesAPI = new ServicesAPI();
export default servicesAPI;