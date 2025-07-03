/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const HowCanYouHelp = () => {
  const Features = [
    {
      title: 'together Pledge',
      des: 'Variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      icon: '/icons/icon1.svg',
      width: '80%',
      duration: 500,
    },
    {
      title: 'Donate for HOmless',
      des: 'Variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      icon: '/icons/icon2.svg',
      width: '94%',
      duration: 700,
    },
    {
      title: 'Fundraise',
      des: 'Variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      icon: '/icons/icon3.svg',
      width: '70%',
      duration: 900,
    },
  ]

  return (
    <div className="services services--style3">
      <div className="container">
        <div className="row">
          <div className="mx-auto col-lg-6">
            <div className="mb-65 text-center sectionTitle">
              <span className="justify-content-center sectionTitle__small">
                <i className="fa-solid fa-heart btn__icon"></i>
                potrzebujemy Cię
              </span>
              <h2 className="sectionTitle__big">Jak możesz pomóc?</h2>
            </div>
          </div>
        </div>
        <div className="pt-35 row gx-35">
          {Features.map((features, fitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
              <Slide direction="up" triggerOnce={true} duration={features.duration}>
                <div>
                  <div className="mb-30 keyFeatureBlock keyFeatureBlock--style4">
                    <div className="keyFeatureBlock__left">
                      <span className="keyFeatureBlock__icon">
                        <img src={features.icon} alt="Gainioz Feature_Icon" />
                      </span>
                    </div>
                    <div className="keyFeatureBlock__content">
                      <h3 className="keyFeatureBlock__heading">
                        <span className="keyFeatureBlock__heading__link">{features.title}</span>
                      </h3>
                      <p className="keyFeatureBlock__text">{features.des}</p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowCanYouHelp
