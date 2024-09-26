'use client'
import Link from "next/link"
import ArrowRightIcon from "@/components/common/icons/ArrowRight"
import ActivityList from "./ActivityList"
import Container from "@/components/common/containers/Container"
import { useAccountContext } from "@/context/AccountContextProvider"
import { useUserContext } from "@/context/UserContextProvider"

const ActivityContainer = () => {
  const { id } = useAccountContext();
	const { token } = useUserContext();
  return (
    <Container className="border border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl w-11/12 md:w-10/12 flex flex-col ">
      <h1 className="text-base my-2">Tu actividad</h1>
        <ActivityList filter={null} accountId={id} token={token}/>
        <hr className="text-medium-gray opacity-30 mt-2 w-full"/>
      <div className="flex justify-between w-full pr-5 items-center">
        <Link href={'/dashboard/actividad'} className="text-sm font-semibold py-3">Ver toda tu actividad</Link>
        <ArrowRightIcon className="#000000"/>
      </div>
    </Container>
  )
}

export default ActivityContainer