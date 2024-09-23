'use client'
import ActivityListFilter from "@/components/actividad/ActivityListFilter"
import Button from "@/components/common/buttons/Button"
import ArrowRightIcon from "@/components/common/icons/ArrowRight"
import FilterIcon from "@/components/common/icons/FilterIcon"
import SearchIcon from "@/components/common/icons/SearchIcon"

const ActivityPage = () => {
  return (
		<>
			<div className="flex space-x-2 text-sm w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Tu actividad</span>
      </div>
			<div className="md:mt-6 w-10/12 md:flex md:items-center md:space-x-5 mb-4">
        <div className="w-full flex items-center relative">
          <SearchIcon className="h-min absolute left-2"/>
          <input placeholder="Buscar en tu actividad" className="p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
        </div>
				<div className="md:flex md:items-center md:justify-between md:space-x-2 md:p-3 hidden md:bg-total-primary md:rounded-lg md:w-4/12">
          <Button title={"Filtrar"} className="border-none"/>
          <FilterIcon fill="#0AEB8C"/>
        </div>
      </div>
			<ActivityListFilter/>
		</>
  )
}

export default ActivityPage