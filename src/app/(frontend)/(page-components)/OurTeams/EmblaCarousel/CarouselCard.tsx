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
    <div className="featureBlock" key={team.id}>
      <div className="featureBlock__wrap">
        <figure className="featureBlock__thumb">
          <a href="#" className="featureBlock__thumb__link">
            <img src={imgUrl} alt="Gainioz Featured Thumb" />
          </a>
          <a
            href="#"
            className="featureBlock__hashLink"
            style={{ backgroundImage: `url('featuredCateShape2.png')` }}
          >
            <span className="featureBlock__hashLink__text">#{tag}</span>
          </a>
        </figure>
        <div className="featureBlock__content">
          <h3 className="featureBlock__heading">
            <a href="#" className="featureBlock__heading__link">
              {team.name}
            </a>
          </h3>
          <p className="featureBlock__text">{team.description} </p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
