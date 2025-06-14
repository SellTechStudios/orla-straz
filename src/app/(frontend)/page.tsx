import './styles.css'

import { Container } from '@/components/Container'
import MapComponent from '@/components/Map/map'
import OurTeams from '@/components/OurTeams/OurTeams'
import React from 'react'

export default async function HomePage() {
  return (
    <div className="home">
      <Container>
        <h2>Poznaj naszych wolonatriuszy</h2>
        <OurTeams />
      </Container>

      <Container>
        <h2>Lub poszukaj na mapie najbliższych wolonatriuszy</h2>
        <MapComponent />
      </Container>
    </div>
  )
}
