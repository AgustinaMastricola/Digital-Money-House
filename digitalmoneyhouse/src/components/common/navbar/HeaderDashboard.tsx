import React from 'react'
import LogoHeader from './LogoHeader'
import Link from 'next/link'

type HeaderDashProps = {
  firstname: string,
  lastname: string
}

const HeaderDashboard = ({ firstname, lastname }: HeaderDashProps) => {
  const f = firstname.charAt(0).toUpperCase()
  const l = lastname.charAt(0).toUpperCase()

  return (
    <header className='flex items-center justify-between bg-total-black py-2 pr-3'>
      <LogoHeader src='LogoVerde.png'/>
      
      <Link href={'/perfil'} className='flex items-center space-x-2'>
        <p className="text-total-black bg-total-primary uppercase p-2 rounded-lg font-bold md:text-lg">
					{f + l}
				</p>
        <p className='text-total-primary'>
          Hola, {firstname} {lastname}
        </p>
      </Link>
    </header>
  )
}

export default HeaderDashboard