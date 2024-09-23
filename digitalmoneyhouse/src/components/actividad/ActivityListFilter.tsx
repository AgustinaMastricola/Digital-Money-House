import Container from "../common/containers/Container"
import FilterIcon from "../common/icons/FilterIcon"
import ActivityContainer from "../home/authenticated/ActivityContainer"
import ActivityList from "../home/authenticated/ActivityList"

const ActivityListFilter = () => {
  return (
    <Container className={"border border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl w-10/12 flex flex-col "}>
      <div className="flex justify-between">
        <h1 className="text-base my-2">Tu actividad</h1>
        <div className="flex items-center space-x-2">
          <p className="font-bold">Filtrar</p>
          <FilterIcon/>
        </div>
      </div>
      <hr className="text-medium-gray opacity-30 mt-2 w-full"/>
      <ActivityList/>
    </Container>
  )
}

export default ActivityListFilter