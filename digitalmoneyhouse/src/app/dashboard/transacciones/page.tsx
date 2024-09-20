'use client'
import Container from "@/components/common/containers/Container"
import ArrowRightIcon from "@/components/common/icons/ArrowRight"

const DepositPage = () => {
  return (
		<>
			<div className="flex space-x-2 text-sm w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Cargar dinero</span>
      </div>
			<Container className={'bg-total-black'}>
				<div className="text-total-white">
					HOLA
				</div>
			</Container>
		</>
  )
}

export default DepositPage