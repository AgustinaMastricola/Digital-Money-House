import { useSession } from "next-auth/react";

const page = () => {
  const {data: session, status} = useSession();
  
  return (
    <div>Mi perfil <br/>

    </div>
  )
}

export default page