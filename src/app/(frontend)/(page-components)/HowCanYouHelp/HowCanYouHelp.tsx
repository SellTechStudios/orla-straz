/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Slide, Fade } from 'react-awesome-reveal'

const HowCanYouHelp = () => {
  const Features = [
    {
      title: 'together Pledge',
      des: 'Variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      icon: '/icons/icon1.svg',
    },
    {
      title: 'Donate for Homless',
      des: 'Variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      icon: '/icons/icon2.svg',
    },
    {
      title: 'Fundraise',
      des: 'Variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      icon: '/icons/icon3.svg',
    },
  ]

  return (
    <div className="bg-[#f7f7f7] py-16" id="how-can-you-help">
      <div className="flex flex-col gap-12 mx-auto container">
        <div className="flex flex-col gap-4 text-center">
          <span className="items-center text-[#eb9309] text-sm uppercase tracking-widest fw-600">
            <i className="mr-2 animate-[scale-up-one_2s_infinite] fa-solid fa-heart"></i>
            potrzebujemy Cię
          </span>
          <h2>Jak możesz pomóc?</h2>
        </div>

        <div className="flex flex-row gap-16 between">
          <Fade cascade damping={0.2} triggerOnce={true}>
            {Features.map((features, fitem) => (
              <div className="relative bg-white p-10 pt-18 col-lg-4 col-md-6 col-12" key={fitem}>
                <img
                  src={features.icon}
                  className="top-[-41px] absolute bg-white shadow-xs p-5 border-[#f1f1f1] border-1 hover:border-[#eb9309] rounded-full transition-colors duration-300"
                />
                <div className="keyFeatureBlock__content">
                  <h3>{features.title}</h3>
                  <p className="keyFeatureBlock__text">{features.des}</p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default HowCanYouHelp
