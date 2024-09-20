import clsx from 'clsx'
import { ReactNode } from 'react'

const Container = ({children, className}:{children:ReactNode, className: string}) => {
  return (
    <div className={clsx('mb-4 w-10/12 rounded-lg p-3 flex flex-col md:px-5', className)}>
      {children}
    </div>
  )
}

export default Container;