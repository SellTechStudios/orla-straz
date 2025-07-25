// import './styles.css'
import React from 'react'
import { ContactNoTeamFound } from '@/app/(frontend)/(page-components)/ContactNoTeamFound/ContactNoTeamFound'
import MapComponent from '@/app/(frontend)/(page-components)/Map/map'
import OurTeams from '@/app/(frontend)/(page-components)/OurTeams/OurTeams'
import HowCanYouHelp from './(page-components)/HowCanYouHelp/HowCanYouHelp'
import MissionVision from './(page-components)/MissionVision/MissionVision'
import PartnerSection from './(page-components)/PartnerSection'
import Hero4 from './(page-components)/hero4/hero4'

export default async function HomePage() {
  return (
    <div className="py-10 home">
      {/* <Hero /> */}
      {/* <ContactNoTeamFound />*/}

      <Hero4 />
      <div className="pt-60">
        <OurTeams />
      </div>
      <div className="pt-60">
        <MapComponent />
      </div>
      <div className="pt-60 gray-bg">
        <HowCanYouHelp />
      </div>
      <div className="pt-60">
        <MissionVision />
      </div>
      <div className="pt-60 pb-60">
        <PartnerSection />
      </div>
    </div>
  )
}
