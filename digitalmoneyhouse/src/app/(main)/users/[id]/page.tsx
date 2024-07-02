import userApi from "@/services/users/users.service"


const userPage = async ({params}:{params: {id:number}}) => {
  const userPromise = userApi.getUserDataById(params.id)
  const [user] = await Promise.all([userPromise])
  
  return (
    <div>
      <p>{user.dni}{user.email}</p>
      
    </div>
  )
}

export default userPage