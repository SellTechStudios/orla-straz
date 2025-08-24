/* eslint-disable @next/next/no-img-element */
import React from 'react'
import shape from './images/footerShape2.png'

const Footer = () => {
  return (
    <footer className="pt-[70px] relative bg-[#0d0d0d] text-white/75">
      <img src={shape.src} className="absolute top-[-1px] w-full" />
      <div className="container mx-auto ">
        <div className="flex flex-row justify-between items-center mb-12">
          <img src="/logo/logo.png" width="120" alt="Logo" />
          <div className="inline-flex gap-2">
            <a
              className="h-12 w-12 grid place-items-center rounded-full border border-gray-600 text-white hover:bg-[#b3862de6] hover:border-[#b3862de62] hover:text-white transition-all duration-300"
              href="https://www.facebook.com/orlastraz"
              target="_blank"
              rel="nofollow"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="h-12 w-12 grid place-items-center rounded-full border border-gray-600 text-white hover:bg-[#b3862de6] hover:border-[#b3862de6] hover:text-white transition-all duration-300"
              href="https://www.instagram.com/orlastraz/"
              target="_blank"
              rel="nofollow"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="h-12 w-12 grid place-items-center rounded-full border border-gray-600 text-white hover:bg-[#b3862de6] hover:border-[#b3862de6] hover:text-white transition-all duration-300"
              href="https://www.youtube.com/channel/UC7TMSa6MaLja66liaNSr51g"
              target="_blank"
              rel="nofollow"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <hr className="m-0 opacity-100 bg-[#303030] border-0 h-px" />
        <div className="pt-[65px] pb-[35px] w-full flex flex-row justify-between">
          <div className="flex flex-row gap-40">
            <div>
              <h2 className=" uppercase text-xl font-medium mb-6">Kontakt</h2>
              <div>
                <span className="font-bold">Fundacja Orla Straż</span>
                <br />
                <span>ul. Bartników 12</span>
                <br />
                <span>84-207 Bojano</span>
              </div>
            </div>
            <div>
              <h2 className="uppercase text-xl font-medium mb-6">Wspieraj Nas</h2>
              <div className="flex flex-col gap-2.5">
                <a href="#" className="text-sm block hover:text-[#b31217] transition-colors">
                  Przekaż Darowiznę
                </a>
                <a href="#" className="text-sm  block hover:text-[#b31217] transition-colors">
                  Zostań wolontariuszem
                </a>
                <a href="#" className="text-sm block hover:text-[#b31217] transition-colors">
                  Skorzystaj z usługi
                </a>
              </div>
            </div>
            <div>
              <div>
                <h2 className="uppercase text-xl font-medium mb-6">Przydatne Linki</h2>
                <div className="flex flex-col gap-2.5">
                  <a href="#" className="text-sm  block hover:text-[#b31217] transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-sm  block hover:text-[#b31217] transition-colors">
                    O Nas
                  </a>
                  <a href="#" className="text-sm  block hover:text-[#b31217] transition-colors">
                    Kontakt
                  </a>
                  <a href="#" className="text-sm  block hover:text-[#b31217] transition-colors">
                    Aktywne Projekty
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" uppercase text-xl font-medium mb-6">Instagram</h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
