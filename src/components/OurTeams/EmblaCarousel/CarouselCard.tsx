/* eslint-disable @next/next/no-img-element */

import React from 'react'

export type CarouselCardProps = {
  id: string
  image: string
  title: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({ id, image, title }) => (
  <div
    style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      background: '#fff',
      maxWidth: 300,
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: '6px' }}
    />
    <h3 style={{ margin: '16px 0 12px 0', fontSize: '1.2rem' }}>{title}</h3>
    <button
      style={{
        padding: '8px 16px',
        background: '#1976d2',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Read More
    </button>
  </div>
)

export default CarouselCard
