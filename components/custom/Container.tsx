import { cn } from '@/lib/utils'
import React from 'react'

// create a container component that takes children and a className
export default function Container({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={cn("container w-full h-full ", className)}>{children}</div>
  )
}
