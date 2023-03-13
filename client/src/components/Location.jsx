import React, { useEffect } from 'react'
import { useGeolocated } from 'react-geolocated'

const Demo = ({ setLocation, signUp, setSignUp }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    })
  useEffect(() => {
    if (coords) {
      setSignUp({
        ...signUp,
        location: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      })
    }
  }, [coords])

  return
}

export default Demo
