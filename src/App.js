import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
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
      const loadedRestaurants = [];
      for (const key in data) {
        loadedRestaurants.push({
          id: data[key].id,
          name: data[key].name,
          ingredients: data[key].rating,
          price: data[key].price,
          address: data[key].location.address1,
          city: data[key].location.city,
          province: data[key].location.state,
          zip_code: data[key].location.zip_code,
          image: data[key].image_url,
          cuisines: data[key].categories[0].title,
          phone: data[key].display_phone,
          url: data[key].url,
          coordinates: data[key].coordinates
        })
      }
      setRestaurantData(loadedRestaurants)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Sidebar onSearch={getRestaurantData} restaurantData={restaurantData} />
      <Map restaurantData={restaurantData} />
    </>
  );
}

export default App;
