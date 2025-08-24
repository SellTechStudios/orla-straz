import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <section
      className="z-1 before:z-[-1] before:absolute relative before:inset-0 before:bg-black bg-cover bg-center before:opacity-60 before:content-[''] clip-hero-shape"
      style={{ backgroundImage: "url('photos/hero.png')" }}
    >
      <div className="flex flex-row mx-auto py-60 container">
        <div className="flex flex-col flex-1 gap-6">
          <Slide direction="up" triggerOnce={false} duration={1200}>
            <span className="items-center text-[#eb9309] text-sm uppercase tracking-widest fw-600">
              <i className="mr-2 animate-[scale-up-one_2s_infinite] fa-solid fa-heart"></i>
              Wierzymy, że
            </span>
          </Slide>
          <Slide direction="up" triggerOnce={false} duration={1200} delay={100}>
            <h1 className="text-white text-8xl">
              Możemy coś <br />
              zmienić
            </h1>
          </Slide>
          <Slide direction="up" triggerOnce={false} duration={1200} delay={200}>
            <span className="text-white">
              Nie damy rady naprawić wszystkiego ale potrafimy zmienić życie konkretnych ludzi
            </span>
          </Slide>
          <Slide direction="up" triggerOnce={false} duration={1200} delay={300}>
            <a className="inline-block bg-red-700 mt-8 px-8 py-4 rounded-sm text-white" href="#">
              Dołącz do nas{' '}
              <i className="ml-2 animate-[scale-up-one_2s_infinite] fa-solid fa-heart"></i>
            </a>
          </Slide>
        </div>
        <div className="flex flex-1 justify-center items-center text">
          <Slide direction="up" triggerOnce={false} duration={1200}>
            <img src="/logo/logo.png" width={200} alt="Logo" />
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Hero
