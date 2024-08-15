import Link from 'next/link'
import React from 'react'

const NavbarUser = () => {
  return (
    <>
			<header className={`p-3 flex justify-between items-center ${bgContainer}`}>
				<Link href="/">
					<img src={logo} alt="Icono brand" />
				</Link>
      </header>
    </> 
  )
}

export default NavbarUser