'use client'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

import React from 'react'

const MapComponent = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  }
  const defaultCenter = {
    lat: 54.4846445,
    lng: 18.3569395,
  }

  const options = {
    gestureHandling: 'greedy', // or 'greedy'
    scrollwheel: true,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyArnAD5XLctqjrjkFzpHQyZbAdHK0YPlvs">
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter} options={options} />
    </LoadScript>
  )
}

export default MapComponent
