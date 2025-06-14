import React from 'react'
import { cn } from '@/payload/utilities/cn'

type Props = {
  className?: string
  children: React.ReactNode
}

export const Container: React.FC<Props> = (props) => (
  <div className={cn('container mx-auto', props.className)}>{props.children}</div>
)
