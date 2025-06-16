'use client'

import React from 'react'
import { cn } from '@/payload/utilities/cn'

export const ContactNoTeamFound: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className="bg-accentDark w-full h-[8px]"></div>
      <div
        className={cn(
          isOpen ? 'max-h-[500px]' : 'max-h-0',
          'relative bg-accentDark w-full transition-all duration-150',
        )}
      >
        <div className="p-40 text-white">CONTACT FORM</div>

        <button
          className="top-full left-1/2 z-10 absolute bg-accentDark px-8 py-4 rounded-b-lg text-white uppercase -translate-x-1/2"
          onClick={() => setIsOpen(!isOpen)}
        >
          Nie znalazem zespołu
        </button>
      </div>
    </>
  )
}
