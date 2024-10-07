import React from 'react'
import Container from '../common/containers/Container'
import ListCards from '../tarjetas/ListCards'
import Link from 'next/link'
import AddIcon from '../common/icons/AddIcon'
import Button from '../common/buttons/Button'
type SelectCardProps = {
	handleClickStep: (n:number) =>void
}
const SelectCard = ({handleClickStep}: SelectCardProps) => {
  return (
    <>
    <Container
				className={
					"bg-total-black w-11/12 md:w-10/12 md:mt-6 flex flex-col py-4 px-5"
				}
			>
				<h2 className="text-total-primary font-bold md:w-full">
					Seleccionar tarjeta
				</h2>
				<ListCards className="w-full px-4 py-2 mt-5" canDelete={false} />

				<div className="flex items-center justify-between">
					<Link
						className="flex items-center space-x-4 mt-5"
						href={"/dashboard/tarjetas/agregar"}
					>
						<AddIcon />
						<p className="text-total-primary font-bold">Nueva tarjeta</p>
					</Link>
					<Button
						title={"Continuar"}
						className={
							"bg-total-primary border-total-primary px-9 py-3 md:block mt-5 hidden"
						}
						onClick={() => handleClickStep(2)}
					/>
				</div>
			</Container>
    </>
  )
}

export default SelectCard