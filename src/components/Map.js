import GoogleMapReact from 'google-map-react';
import classes from './Map.module.css';
import { Marker } from './Marker';

export default function Map({ restaurantData, setChildClicked }) {

  const center = {
    lat: 43.6532,
    lng: -79.3832
  };

  return (
    <div className={classes['map__container']}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        center={center}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {restaurantData.length && restaurantData.map((restaurant, i) => (
          <Marker
            key={i}
            lat={restaurant.coordinates.latitude}
            lng={restaurant.coordinates.longitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}