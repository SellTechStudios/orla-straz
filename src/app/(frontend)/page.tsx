import './styles.css'
import React from 'react'
import { ContactNoTeamFound } from '@/app/(frontend)/(page-components)/ContactNoTeamFound/ContactNoTeamFound'
import MapComponent from '@/app/(frontend)/(page-components)/Map/map'
import OurTeams from '@/app/(frontend)/(page-components)/OurTeams/OurTeams'
import { Container } from '@/components/Container'

export default async function HomePage() {
  return (
    <div className="home">
      <Container>
        <h2>Poznaj naszych wolonatriuszy</h2>
        <OurTeams />
      </Container>

      <ContactNoTeamFound />
      <MapComponent />
    </div>
  )
}
