import GoogleMapReact from 'google-map-react';
import classes from './Map.module.css';
import { useState, useEffect } from 'react';
import { Marker } from './Marker'

export default function Map({ restaurantData }) {
  const [coordinates, setCoordinates] = useState([]);
  // const [bounds, setBounds] = useState([]);

  const center = {
    lat: 43.6532,
    lng: -79.3832
  }

  {console.log('RD', restaurantData)}

  return (
    <div className={classes['map__container']}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        center={center}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          // setCoordinates({lat: e.center.lat, lng: e.center.lng})
          // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });

          console.log('EVENT', e)

        }}
        onChildClick={''}
      >
        <Marker
          lat={43.64956354}
          lng={-79.38801849}
          text={'Jabistro'}
        />

      </GoogleMapReact>
    </div>
  )
}