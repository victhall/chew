import Restaurant from './Restaurant';
import classes from './RestaurantList.module.css';
import { useEffect, createRef } from 'react';
import { useState } from 'react';

export default function RestaurantList(props) {
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    setElRefs((refs) => Array(props.restaurantData.length).fill().map((_, i) => refs[i] || createRef()));
  }, [props.restaurantData]);

  return (
    <>
    {props.restaurantData.length ? <h2 className={classes.results}>Results</h2> : <p></p>}
      <div className={classes['restaurant-list']}>
        {props.restaurantData.map((restaurant, i) => {
          return <div ref={elRefs[i]} key={i}>
            <Restaurant
              selected={Number(props.childClicked) === i}
              refProp={elRefs[i]}
              key={i}
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
              is_closed={restaurant.is_closed}
              id={restaurant.id}
            />
          </div>
        })}
      </div>
    </>
  )
}

