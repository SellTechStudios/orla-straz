'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

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
    gestureHandling: 'greedy',
    scrollwheel: true,
  }

  const markers = [
    {
      id: 1,
      position: { lat: 54.4846445, lng: 18.3569395 },
      title: 'Main Location',
    },
    {
      id: 2,
      position: { lat: 54.4856445, lng: 18.3579395 },
      title: 'Secondary Location',
    },
    {
      id: 3,
      position: { lat: 54.4836445, lng: 18.3559395 },
      title: 'Third Location',
    },
  ]

  const mapKey = process.env.MAP_KEY

  return (
    <div id="map">
      <LoadScript googleMapsApiKey={mapKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}
          options={options}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapComponent
