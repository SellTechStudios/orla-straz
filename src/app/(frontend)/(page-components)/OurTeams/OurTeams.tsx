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

  return <EmblaCarousel teams={teams.docs} options={OPTIONS} />
}
