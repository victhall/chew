import GoogleMapReact from 'google-map-react';
import classes from './Map.module.css';
import { useState, useEffect } from 'react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default function Map() {
  // const [coordinates, setCoordinates] = useState([]);
  // const [bounds, setBounds] = useState([]);

  const center = {
    lat: 43.6532,
    lng: -79.3832
  }

  return (
    <div className={classes['map__container']}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        center={center}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true}}
        onChange={(e) => {
          // setCoordinates({lat: e.center.lat, lng: e.center.lng})
          // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });

          console.log('EVENT', e)

        }}
        onChildClick={''}
      >
        <AnyReactComponent 
          lat={43.64956354} 
          lng={-79.38801849} 
          text={'Jabistro'} 
        />

      </GoogleMapReact>
    </div>
  )
}