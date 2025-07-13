import { EmblaOptionsType } from 'embla-carousel'
import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'

const OPTIONS: EmblaOptionsType = { containScroll: false, loop: true, align: 'start' }

export default async function OurTeams() {
  const payload = await getPayload({ config })
  const teams = await payload.find({
    collection: 'teams',
    limit: 10,
    depth: 1,
  })

  const testTeams = [
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
    teams.docs[0],
  ]

  return (
    <div className="container">
      <h2 style={{ textTransform: 'uppercase' }}>Poznaj nasze zespoły</h2>
      <EmblaCarousel teams={testTeams} options={OPTIONS} />
    </div>
  )
}
