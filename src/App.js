import './App.css';
import Map from './components/Map'
import SearchBar from './components/SearchBar';
import RestaurantList from './components/RestaurantList';
import FavouritesIcon from './components/FavouritesIcon';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [restaurantData, setRestaurantData] = useState([]);

  async function getRestaurantData(searchTerm) {
    try {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=toronto&categories=restaurants&term=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        }
      });
      const data = response.data.businesses;
      console.log(data)
      setRestaurantData([...data])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <SearchBar onSearch={getRestaurantData} />
      {restaurantData && <RestaurantList restaurantData={restaurantData} />}
      <FavouritesIcon />
      <Map />
    </>
  );
}

export default App;
