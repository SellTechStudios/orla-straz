/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-between bg-white shadow-xs p-8 align-middle">
      <div className="relative ml-[162px]">
        <img
          src="logo/logo.png"
          alt="Logo"
          className="-top-[8px] -left-[162px] z-2 absolute w-[162px] aspect-auto"
        />
        <img src="logo/logo_text.png" alt="Logo" className="w-[216px] aspect-auto" />
      </div>

      <nav className="flex flex-row items-center gap-6 text-[17px] uppercase">
        <a href="#">Regulamin</a>
        <a href="https://orlastraz.org" target="_blank">
          Strona Fundacji
        </a>
      </nav>
    </header>
  )
}

export default Header
