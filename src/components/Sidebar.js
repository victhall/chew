import classes from './Sidebar.module.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import RestaurantList from './RestaurantList';

export default function Sidebar(props) {
  return (
    <section className={classes.sidebar}>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <Navbar />
        </div>
        <SearchBar onSearch={props.onSearch}/>
      </div>
      {props.restaurantData && <RestaurantList restaurantData={props.restaurantData}/>}
    </section>
  )
}