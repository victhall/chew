import classes from './Sidebar.module.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import RestaurantList from './RestaurantList';
import Collection from './Collection';
import { useState } from 'react';

export default function Sidebar(props) {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)

function showHandler() {
  setShow(true);
  setHide(false)
}

  return (
    <section className={classes.sidebar}>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <Navbar onShow={showHandler}/>
        </div>
        <SearchBar onSearch={props.onSearch} />
      </div>
      <div>
      {hide && props.restaurantData && <RestaurantList restaurantData={props.restaurantData} />} 
      </div>
      <div>
      {show && <Collection />}
      </div>
      
    </section>
  )
}