/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from '@/payload/utilities/cn'
import React, { useState } from 'react'

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const tabs = [
    {
      id: '1',
      label: 'Jak działamy',
      content: (
        <div>
          <h1>Pytamy na miejscu jaka pomoc jest potrzebna</h1>
          <p>
            Naszym celem jest wspieranie ich w powrocie do życia, jakie wiedli przed wojną lub
            zamachami. Chcemy dać im szansę na usamodzielnienie się i uniezależnienie od zewnętrznej
            pomocy, dlatego odbudowujemy i remontujemy zniszczone domy, otwieramy sklepy, warsztaty
            i zakłady pracy, wspieramy gospodarstwa rolne oraz zapewniamy edukację dzieciom i
            dorosłym. Wszystkie te działania są bezpośrednią odpowiedzią na prośby, które
            otrzymujemy. Nie mamy jednej dziedziny, w której się specjalizujemy, a wsparcie
            dostosowujemy do aktualnej sytuacji osób poszkodowanych.
          </p>
        </div>
      ),
    },
    {
      id: '2',
      label: 'Gdzie działamy',
      content: (
        <div>
          <h1>Sprawdź, w jakich regionach pomagamy</h1>
          <div className="flex flex-row gap-10">
            <img
              src="https://orlastraz.org/wp-content/uploads/2025/03/mapa_OS2-scaled.jpg"
              width={400}
              alt="Mapa działalności Orlej Straży"
              className="col-6"
            />
            <p>
              Do tej pory pomagaliśmy ofiarom konfliktów zbrojnych i aktów terroru w kilku krajach
              oraz regionach autonomicznych na trzech kontynentach. W niektórych przypadkach były to
              jedynie pojedyncze projekty humanitarne, w innych długoletnia działalność. Od 2016
              roku udzieliliśmy różnych form wsparcia potrzebującym w:
            </p>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      label: 'Co robimy',
      content: (
        <div>
          <h1>Zawsze staramy się dostosowywać pomoc do potrzeb</h1>
          <p>
            Zapewnienie ludziom wsparcia w powrocie do normalności oraz danie im szansy, aby mogli
            się usamodzielnić to nasze priorytety. Są jednak sytuacje, kiedy potrzebna jest też
            pomoc doraźna. Dopiero zaspokojenie podstawowych potrzeb pozwala myśleć o bardziej
            rozwiniętych działaniach. W Iraku wspieraliśmy rodziny, które po ludobójstwie musiały
            zamieszkać w obozach dla przesiedleńców, m.in. kupując im sprzęt gospodarstwa domowego,
            jak lodówki czy pralki. Czasem trzeba było dostarczyć im łózka lub materace, aby dzieci
            nie spały na gołej ziemi. Ludzie trafiali do obozów, nie mając absolutnie nic.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="container mx-auto" id="mission-vision">
      <div className="flex flex-row gap-20">
        <nav className="min-w-[300px] flex flex-col gap-10 items-stretch text-left relative">
          <div
            className="absolute left-0 w-1 bg-black transition-all duration-300 ease-in-out"
            style={{
              height: 'calc(3xl + 20px)',
              top: `${tabs.findIndex((tab) => tab.id === activeTab) * (100 + 40)}px`,
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={cn(
                'w-full text-left block uppercase fw-500 py-10 pl-8 text-3xl border-1 hover:border-[#f1f1f1] rounded-sm border-transparent cursor-pointer relative transition-all duration-300 ease-in-out',
                activeTab === tab.id && 'shadow-sm',
              )}
              onClick={() => toggle(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div id="content" className="flex flex-1 relative">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                'border-1 border-[#f1f1f1] p-16 absolute inset-0 transition-opacity duration-300 ease-in-out',
                activeTab === tab.id
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none',
              )}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MissionVision
