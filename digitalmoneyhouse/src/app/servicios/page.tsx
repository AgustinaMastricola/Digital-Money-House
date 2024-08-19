'use client'
import Menu from '@/components/common/menu/Menu'
import HeaderDashboard from '@/components/common/navbar/HeaderDashboard'

const page = () => {
  return (
		<>
			<HeaderDashboard firstname={"Agustina"} lastname={"Mastricola"} />
			<main>
				<div className="md:w-full md:flex md:justify-between">
					<div className="hidden md:block w-4/12 lg:w-3/12 xl:w-2/12">
						<Menu />
					</div>
					<div className="flex flex-col space-y-4 items-center py-5 md:w-8/12 lg:w-9/12 xl:w-10/12">
						SERVICIOS
					</div>
				</div>
			</main>
		</>
  )
}

export default page