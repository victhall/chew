import classes from './Restaurant.module.css';
import { CiBookmark } from "react-icons/ci";
import RestaurantDetails from './RestaurantDetails';
import { useState } from 'react';

export default function Restaurant(props) {
  const [isShown, setIsShown] = useState(false)

  function openDetails() {
    setIsShown(true)
  }

  function closeDetails() {
    setIsShown(false)
  }

  return (
    <>

  {!isShown && <div className={classes['restaurant-container']}>
        <img onClick={openDetails} className={classes['restaurant-img']} src={props.image} />
        <div className={classes['inner-container']}>
          <div className={classes['restaurant-header']}>
            <h2 onClick={openDetails} className={classes['restaurant-name']}>{props.name}</h2>
            <CiBookmark className={classes['save-icon']} />
          </div>
          <div className={classes['price-cuisine']}>
            <p className={classes.price}>{props.price}</p>
            <p className={classes.cuisines}>&#x2022; {props.cuisines}</p>
          </div>
          <p className={classes.cuisines}>{props.address}, {props.city}, {props.province} {props.zip_code}</p>
        </div>
      </div> }

      {isShown && <RestaurantDetails
        closeDetails={closeDetails}
        image={props.image}
        name={props.name}
        price={props.price}
        cuisines={props.cuisines}
        address={props.address}
        phone={props.phone}
        url={props.url}
      />}
    </>
  )
}