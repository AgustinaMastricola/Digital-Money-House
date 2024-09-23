'use client'
import ActivityListFilter from "@/components/actividad/ActivityListFilter"
import ArrowRightIcon from "@/components/common/icons/ArrowRight"
import SearchIcon from "@/components/common/icons/SearchIcon"

const ActivityPage = () => {
  return (
		<>
			<div className="flex space-x-2 text-sm w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Tu actividad</span>
      </div>
			<div className=" w-10/12">
        <div className="w-full flex items-center relative mb-4">
          <SearchIcon className="h-min absolute left-2"/>
          <input placeholder="Buscar en tu actividad" className="hide-arrow p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
        </div>
      </div>
			<ActivityListFilter/>
		</>
  )
}

export default ActivityPage