'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useCallback, useRef } from 'react'

const MapComponent = () => {
  const mapRef = useRef(null)

  const mapStyles = {
    height: '590px',
    width: '100%',
  }

  const options = {
    gestureHandling: 'cooperative',
    scrollwheel: true,
  }

  const markers = [
    {
      id: 1,
      position: { lat: 54.77, lng: 18.35 },
      title: 'Main Location',
    },
    {
      id: 2,
      position: { lat: 54.48, lng: 17.35 },
      title: 'Secondary Location',
    },
    {
      id: 3,
      position: { lat: 54.1, lng: 18.3559395 },
      title: 'Third Location',
    },
  ]

  const onMapLoad = useCallback(
    (map) => {
      mapRef.current = map

      if (markers.length > 0) {
        const bounds = new window.google.maps.LatLngBounds()

        markers.forEach((marker) => {
          bounds.extend(marker.position)
        })

        map.fitBounds(bounds)
      }
    },
    [markers],
  )

  const mapKey = process.env.NEXT_PUBLIC_MAP_KEY

  return (
    <div id="map">
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 bg-[#b3862dcc] p-8 text-white">
          <h2>Nie znalazłem zespołu</h2>
          <span>
            Jeśli żaden z obecnie zarejestrowanych zespołów naszych wolontariuszy nie spełnia Twoich
            oczekiwań, skontaktuj się znami a postaramy się skonaktować Cię z ludźmi chcącymi pomóc
          </span>

          <form>
            <input type="text" placeholder="Imię i nazwisko" className="mt-4 mb-4 p-2 w-full" />
            <input type="email" placeholder="Email" className="mb-4 p-2 w-full" />
            <input type="text" placeholder="Telefon" className="mb-4 p-2 w-full" />
            <textarea
              placeholder="Napisz czego potrzebujesz"
              className="mb-4 p-2 w-full h-32"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-2 border-1 border-white rounded-full text-white"
            >
              Wyślij
            </button>
          </form>
        </div>
        <div className="flex flex-2">
          <LoadScript googleMapsApiKey={mapKey}>
            <GoogleMap mapContainerStyle={mapStyles} options={options} onLoad={onMapLoad}>
              {markers.map((marker) => (
                <Marker key={marker.id} position={marker.position} title={marker.title} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  )
}

export default MapComponent
