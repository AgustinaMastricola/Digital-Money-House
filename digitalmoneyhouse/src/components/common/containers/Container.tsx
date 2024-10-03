import clsx from 'clsx'
import { ReactNode } from 'react'

const Container = ({children, className}:{children:ReactNode, className: string}) => {
  return (
    <div className={clsx('mb-4 w-10/12 rounded-lg px-9 flex flex-col', className)}>
      {children}
    </div>
  )
}

export default Container;