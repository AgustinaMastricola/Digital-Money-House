import userApi from "@/services/users/users.service"


const userPage = async ({params}:{params: {id:number}}) => {
  //const userPromise = userApi.getUserData(params.id)
  //const [user] = await Promise.all([userPromise])
  
  return (
    <div>
      <p>usuario tanto</p>
      
    </div>
  )
}

export default userPage