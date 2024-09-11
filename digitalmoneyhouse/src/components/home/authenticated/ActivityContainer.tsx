import Link from "next/link"
import ArrowRightIcon from "@/components/common/icons/ArrowRight"
import ActivityList from "./ActivityList"

const ActivityContainer = () => {
  return (
    <div className="w-11/12 mb-4 pl-2 pt-3 md:pl-10 lg:pl-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
      <h1 className="text-base my-2">Tu actividad</h1>
        <ActivityList/>
        <hr className="text-medium-gray opacity-30 mt-2 w-full"/>
      <div className="flex justify-between w-full pr-5 items-center">
        <Link href={'/dashboard/actividad'} className="text-sm font-semibold py-3">Ver toda tu actividad</Link>
        <ArrowRightIcon/>
      </div>
    </div>
  )
}

export default ActivityContainer