/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { TfiEmail, TfiHeadphoneAlt, TfiInfoAlt } from 'react-icons/tfi'
import { Container } from '../../../../components/Container'
import AddressDetails from './ContactDetails/AddressDetails'
import PhoneDetails from './ContactDetails/PhoneDetails'
import SocialMediaLinks from './ContactDetails/SocialMediaLinks'

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center bg-[url('/photos/children-in-line.webp')] bg-cover bg-no-repeat bg-center py-20 text-white">
      <Container className="brightness-100">
        <div className="flex flex-row justify-between items-center mb-16 pb-16 border-white/10 border-b-[1px]">
          <div className="flex flex-1">
            <img src="/logo/logo.png" width={120} alt="Logo" />
          </div>

          <div className="flex flex-1 justify-center">
            <a
              target="_blank"
              href="https://orlastraz.org/wspieram-2/"
              className="bg-accentDark shadow-md px-8 py-4 rounded-full text-white uppercase"
            >
              Wspieram
            </a>
          </div>

          <div className="flex flex-1 justify-end">
            <SocialMediaLinks />
          </div>
        </div>

        <div className="flex flex-row justify-between opacity-50">
          <div className="items-start gap-4 grid grid-cols-[auto_1fr]">
            <TfiInfoAlt className="mt-1" />
            <AddressDetails />

            <TfiHeadphoneAlt className="mt-1" />
            <PhoneDetails />

            <TfiEmail className="mt-1" />
            <a href="mailto:fundacja@orlastraz.org">fundacja@orlastraz.org</a>
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
