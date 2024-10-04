import clsx from 'clsx'
import { ReactNode } from 'react'

const Container = ({children, className}:{children:ReactNode, className: string}) => {
  return (
    <div className={clsx(' w-10/12 rounded-lg flex flex-col', className)}>
      {children}
    </div>
  )
}

export default Container;