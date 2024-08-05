import { ActivityUserType } from "@/types/activityUser.types"

type ActivityListProps = {
  transactions: ActivityUserType[]
}

const ActivityList = ({transactions}:ActivityListProps) => {
  return (
    <div>
      <h1>Tu actividad</h1>
      <ul>
        {
        transactions.map((item, index)=>(
          <li key={`tansaction-${index}`}>
            <p>{item.description}</p>
            <p>${item.amount}</p>
            <p>{item.dated}</p>
          </li>
        )) 
        }
      </ul>
    </div>
  )
}

export default ActivityList