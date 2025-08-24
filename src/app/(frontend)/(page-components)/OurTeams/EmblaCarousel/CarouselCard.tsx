/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Team } from '@/payload-types'

export type CarouselCardProps = {
  team: Team
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const { team } = props
  const imgUrl =
    typeof team.photo === 'string' ? team.photo : team.photo?.url || 'photos/missing.png'

  const tag =
    Array.isArray(team.tags) && typeof team.tags[0] === 'string'
      ? team.tags[0]
      : Array.isArray(team.tags) && typeof team.tags[0]?.tag === 'string'
        ? team.tags[0].tag
        : 'default-tag'

  return (
    <div className="bg-white border-1 border-[#f1f1f1] items-center p-4 relative" key={team.id}>
      <figure className="mb-8 relative">
        <a href="#" className="">
          <img src={imgUrl} alt="Gainioz Featured Thumb" />
        </a>
        <a
          href="#"
          className="min-w-[98px] absolute top-0 left-0 min-h-[38px] bg-[url('/teamTagShape1.png')] bg-no-repeat bg-contain bg-left pl-2  py-[2px]"
        >
          <span className="text-white text-xs">#{tag}</span>
        </a>
      </figure>
      <div>
        <h3>
          <a href="#">{team.name}</a>
        </h3>
        <p>{team.description}</p>
      </div>
    </div>
  )
}

export default CarouselCard
