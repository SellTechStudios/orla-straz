/* eslint-disable @next/next/no-img-element */

import React from 'react'

export type CarouselCardProps = {
  id: string
  image: string
  title: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({ id, image, title }) => (
  <div className="bg-white p-4 max-w-[300px] text-center">
    <img src={image} alt={title} className="rounded-md w-full h-[180px] object-cover" />
    <h3 className="my-4 mt-4 mb-3 text-[1.2rem]">{title}</h3>
    <button className="bg-accent px-4 py-2 border-none rounded text-white cursor-pointer">
      Read More
    </button>
  </div>
)

export default CarouselCard
