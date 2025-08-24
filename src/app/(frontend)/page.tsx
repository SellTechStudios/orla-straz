import React from 'react'
import PartnerSection from './(page-components)/PartnerSection/PartnerSection'
import MissionVision from './(page-components)/MissionVision/MissionVision'
import HowCanYouHelp from './(page-components)/HowCanYouHelp/HowCanYouHelp'
import OurTeams from './(page-components)/OurTeams/OurTeams'
import MapComponent from './(page-components)/Map/MapComponent'
import Hero from './(page-components)/Hero/Hero'

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="mt-30">
        <OurTeams />
      </div>
      <div className="mt-30">
        <MapComponent />
      </div>
      <HowCanYouHelp />
      <div className="mt-30">
        <MissionVision />
      </div>
      <div className="mt-30">
        <PartnerSection />
      </div>
    </div>
  )
}
