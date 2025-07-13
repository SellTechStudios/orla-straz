import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Hero4 = () => {
  return (
    <section className="hero hero--style5" style={{ backgroundImage: `url('photos/hero.png')` }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-8 mb-30">
            <div className="hero__content">
              <Slide direction="up" triggerOnce={false} duration={1200}>
                <div>
                  <span
                    className="hero__title hero__title--small wow animate__fadeInUp animate__animated"
                    data-wow-duration="1200ms"
                    data-wow-delay="200ms"
                  >
                    <i className="fa-solid fa-heart btn__icon"></i>Wierzymy, że
                  </span>
                </div>
              </Slide>
              <Slide direction="up" triggerOnce={false} duration={1200}>
                <div>
                  <h1
                    className="hero__title hero__title--big text-white wow animate__fadeInUp animate__animated"
                    data-wow-duration="1200ms"
                    data-wow-delay="300ms"
                  >
                    Możemy coś zmienić
                  </h1>
                </div>
              </Slide>
              <Slide direction="up" triggerOnce={false} duration={1200}>
                <div>
                  <p
                    className="hero__text text-white wow animate__fadeInUp animate__animated"
                    data-wow-duration="1200ms"
                    data-wow-delay="400ms"
                  >
                    Nie damy rady naprwić wszystkiego ale potrafimy zmienić życie konkretnych ludzi
                  </p>
                </div>
              </Slide>
              <Slide direction="up" triggerOnce={false} duration={1200}>
                <div>
                  <a
                    className="btn btn--styleOne btn--primary it-btn wow animate__fadeInUp animate__animated"
                    data-wow-duration="1200ms"
                    data-wow-delay="500ms"
                    href="#"
                  >
                    <span className="btn__text">Dołącz do nas</span>
                    <i className="fa-solid fa-heart btn__icon"></i>
                    <span className="it-btn__inner">
                      <span className="it-btn__blobs">
                        <span className="it-btn__blob"></span>
                        <span className="it-btn__blob"></span>
                        <span className="it-btn__blob"></span>
                        <span className="it-btn__blob"></span>
                      </span>
                    </span>
                    <svg
                      className="it-btn__animation"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <defs>
                        <filter>
                          <feGaussianBlur
                            in="SourceGraphic"
                            result="blur"
                            stdDeviation="10"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                            result="goo"
                          ></feColorMatrix>
                          <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </a>
                </div>
              </Slide>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 mb-30 text-center">
            <Slide direction="up" triggerOnce={false} duration={1200}>
              <img src="/logo/logo.png" width={200} alt="Logo" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero4
