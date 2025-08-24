/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'

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
    <div className="py-16 bg-[#f7f7f7]" id="how-can-you-help">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <span className="items-center text-[#eb9309] uppercase fw-600 text-sm tracking-widest">
            <i className="fa-solid fa-heart mr-2 animate-[scale-up-one_2s_infinite]"></i>
            potrzebujemy Cię
          </span>
          <h2>Jak możesz pomóc?</h2>
        </div>
        <div className="flex flex-row between gap-16">
          {Features.map((features, fitem) => (
            <div className="col-lg-4 col-md-6 col-12 bg-white p-10 pt-18 relative" key={fitem}>
              <img
                src={features.icon}
                className="absolute top-[-41px] shadow-xs rounded-full bg-white border-[#f1f1f1] border-1 p-5 hover:border-[#eb9309] transition-colors duration-300"
              />
              <div className="keyFeatureBlock__content">
                <h3>{features.title}</h3>
                <p className="keyFeatureBlock__text">{features.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowCanYouHelp
