import { ServiceInvoiceType, ServiceType } from "@/types/service.types";

class ServicesAPI {

  getAllServices = async ():Promise<ServiceType[]> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/service`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }

  getServiceByID = async (user_id:number):Promise<ServiceInvoiceType> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/service/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }
  getServiceByQUERY = async (query: string):Promise<ServiceType> =>  {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/service/${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      console.log('error')
    }
    return res.json();
  }
}
const servicesAPI = new ServicesAPI();
export default servicesAPI;