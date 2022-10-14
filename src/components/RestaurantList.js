import Restaurant from './Restaurant'
import classes from './RestaurantList.module.css'

export default function RestaurantList(props) {
  return (
    <div className={classes['restaurant-list']}>
      {props.restaurantData.map(restaurant => {
        console.log(restaurant.coordinates)
        return <Restaurant
          key={restaurant.id}
          name={restaurant.name}
          rating={restaurant.rating}
          price={restaurant.price}
          address={restaurant.location.address1}
          image={restaurant.image_url}
          cuisines={restaurant.categories[0].title}
          phone={restaurant.display_phone}
          url={restaurant.url}
          coordinates={restaurant.coordinates}
        />
      })}
    </div>
  )
}

