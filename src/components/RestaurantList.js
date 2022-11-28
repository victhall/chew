import Restaurant from './Restaurant';
import classes from './RestaurantList.module.css';
import Map from './Map';

export default function RestaurantList(props) {
  return (
    <>
      <div className={classes['restaurant-list']}>
        {props.restaurantData.map(restaurant => {

          return <Restaurant
            key={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            price={restaurant.price}
            address={restaurant.address}
            city={restaurant.city}
            province={restaurant.province}
            zip_code={restaurant.zip_code}
            image={restaurant.image}
            cuisines={restaurant.cuisines}
            phone={restaurant.phone}
            url={restaurant.url}
            coordinates={restaurant.coordinates}
          />
        })}
      </div>
    </>
  )
}

