/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Container } from '../../../components/Container'

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center bg-[url('/photos/children-in-line.webp')] bg-cover bg-no-repeat bg-center py-20 text-white">
      <Container className="brightness-100 text-white">
        <div className="flex flex-row justify-between items-center mb-16 pb-16 border-white/10 border-b-[1px]">
          <div className="flex flex-1">
            <img src="/logo/logo.png" width={120} alt="Logo" />
          </div>

          <div className="flex flex-1 justify-center">
            <a
              href="https://orlastraz.org/wspieram-2/"
              target="_blank"
              className="bg-accentDark shadow-md px-8 py-4 rounded-full text-white uppercase"
            >
              Wspieram
            </a>
          </div>

          <div className="flex flex-1 justify-end">
            <section className="flex flex-row justify-between items-center gap-4 pb-4">
              {/* facebook */}
              <a
                href="#"
                className="bg-transparent hover:bg-accent p-3 border border-white/30 hover:border-accent rounded-full transition-colors duration-150"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="white" className="scale-75">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>

              {/* instagram */}
              <a
                href="#"
                className="bg-transparent hover:bg-accent p-3 border border-white/30 hover:border-accent rounded-full transition-colors duration-150"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="white" className="scale-75">
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                className="bg-transparent hover:bg-accent p-3 border border-white/30 hover:border-accent rounded-full transition-colors duration-150"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="white" className="scale-75">
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </a>
              {/* youtube */}
              <a
                href="#"
                className="bg-transparent hover:bg-accent p-3 border border-white/30 hover:border-accent rounded-full transition-colors duration-150"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="white" className="scale-75">
                  <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                </svg>
              </a>
            </section>
          </div>
        </div>

        <div className="flex flex-row justify-between felx">
          <div>
            <h3 className="uppercase">Kontakt</h3>
          </div>

          <div>
            <h3 className="uppercase">Instagram</h3>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
