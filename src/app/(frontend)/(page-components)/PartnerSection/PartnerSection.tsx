'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slider from 'react-slick'
import pimg1 from './images/sponsors1.png'
import pimg2 from './images/sponsors2.png'
import pimg3 from './images/sponsors3.png'
import pimg4 from './images/sponsors4.png'
import pimg5 from './images/sponsors5.png'
import pimg6 from './images/sponsors6.png'

const partners = [
  {
    pImg: pimg1,
  },
  {
    pImg: pimg2,
  },
  {
    pImg: pimg3,
  },
  {
    pImg: pimg4,
  },
  {
    pImg: pimg5,
  },
  {
    pImg: pimg6,
  },
  {
    pImg: pimg2,
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}

const PartnerSection = () => {
  return (
    <section className="container mx-auto" id="partners">
      <h2 className="text-center">Współpracują z Nami</h2>
      <Slider {...settings}>
        {partners.map((partner, pitem) => (
          <div className="text-center grayscale" key={pitem}>
            <img src={partner.pImg.src} alt="Logo" />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default PartnerSection
