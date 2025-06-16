'use client'

import { CarouselCardProps } from './EmblaCarousel/CarouselCard'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'

const OPTIONS: EmblaOptionsType = { containScroll: false, loop: true, align: 'start' }

const SLIDES: Array<CarouselCardProps> = [
  {
    id: '1',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_1.png',
    title: 'Team 1',
  },
  {
    id: '2',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_2.png',
    title: 'Team 2',
  },
  {
    id: '3',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_3.png',
    title: 'Team 3',
  },
  {
    id: '4',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_4.png',
    title: 'Team 4',
  },
  {
    id: '5',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_1.png',
    title: 'Team 5',
  },
  {
    id: '6',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_2.png',
    title: 'Team 6',
  },
  {
    id: '7',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_3.png',
    title: 'Team 7',
  },
  {
    id: '8',
    image: 'https://wordpress.themeholy.com/donat/wp-content/uploads/2024/09/team_1_4.png',
    title: 'Team 8',
  },
]

const OurTeams: React.FC = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />
}

export default OurTeams
