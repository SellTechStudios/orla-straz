/* eslint-disable @next/next/no-img-element */
import React from 'react'
import shape from './images/footerShape2.png'

const Footer = () => {
  return (
    <footer className="pt-70 pb-40 footer footer--bg footer--styleOne">
      <img src={shape.src} alt="Gainioz Shape" className="footer__shape" />
      <div className="container">
        <div className="align-items-center row">
          <div className="col">
            <div className="footer__logo">
              <img src="/logo/logo.png" width={120} alt="Logo" />
            </div>
          </div>
          <div className="col">
            <div className="footer__social itSocial">
              <ul>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/orlastraz"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/orlastraz/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/channel/UC7TMSa6MaLja66liaNSr51g"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <hr className="footer__line" />
          </div>
        </div>
        <div className="row">
          <div className="pt-65 pb-35 footer__middle">
            <div className="justify-content-between row">
              <div className="mb-30 col-lg-2 col-md-4">
                <div className="footer__widget">
                  <div className="footer__title">
                    <h2 className="text-white text-uppercase footer__heading">Kontakt</h2>
                  </div>
                  <div className="footer__menu">
                    <div>
                      <span className="fw-bold">Fundacja Orla Straż</span>
                      <br />
                      <span>ul. Bartników 12, 84-207 Bojano</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-30 col-lg-2 col-md-4">
                <div className="footer__widget">
                  <div className="footer__title">
                    <h2 className="text-white text-uppercase footer__heading">Wspieraj Nas</h2>
                  </div>
                  <div className="footer__menu">
                    <ul>
                      <li>
                        <a href="#">Przekaż Darowiznę</a>
                      </li>
                      <li>
                        <a href="#">Zostań wolontariuszem</a>
                      </li>
                      <li>
                        <a href="#">Skorzystaj z usługi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-30 col-lg-2 col-md-4">
                <div className="footer__widget">
                  <div className="footer__title">
                    <h2 className="text-white text-uppercase footer__heading">Przydatne Linki</h2>
                  </div>
                  <div className="footer__menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">O Nas</a>
                      </li>
                      <li>
                        <a href="#">Kontakt</a>
                      </li>
                      <li>
                        <a href="#">Aktywne Projekty</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-30 text-right col-lg-5">
                <div className="footer__widget">
                  <div className="footer__title">
                    <h2 className="text-white text-uppercase footer__heading">Instagram</h2>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
