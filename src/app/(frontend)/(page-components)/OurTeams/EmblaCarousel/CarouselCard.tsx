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

  return (
    <div className="bg-white p-4 max-w-[300px] text-center">
      <img src={imgUrl} alt={team.name} className="rounded-md w-full h-[180px] object-cover" />
      <h3 className="my-4 mt-4 mb-3 text-[1.2rem]">{team.name}</h3>

      {/* <span>{{team }}</span> */}

      {/* description */}

      {/* tags */}
      <div>
        {team.tags?.map((tag) => (
          <span
            key={tag.id}
            className="inline-block bg-accent mr-2 px-2 py-1 rounded-full outline-2 outline-accent font-mono font-semibold text-gray-800 text-xs hover:white"
          >
            {tag.tag}
          </span>
        ))}
      </div>

      <button className="bg-accent px-4 py-2 border-none rounded text-white cursor-pointer">
        Poznaj Zespół
      </button>
    </div>
  )
}

export default CarouselCard
