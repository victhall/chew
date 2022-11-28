import classes from './Restaurant.module.css';
import { CiBookmark } from "react-icons/ci";

export default function Restaurant(props) {

  return (
    <>
      <div className={classes['restaurant-container']}>
        <img className={classes['restaurant-img']} src={props.image} />
        <div className={classes['inner-container']}>
          <div className={classes['restaurant-header']}>
          <h2 className={classes['restaurant-name']}>{props.name}</h2>
          <CiBookmark className={classes['save-icon']}/>
          </div>
          <div className={classes['price-cuisine']}>
            <p className={classes.price}>{props.price}</p>
            <p className={classes.cuisines}>&#x2022; {props.cuisines}</p>
          </div>
          <p className={classes.cuisines}>{props.address}, {props.city}, {props.province} {props.zip_code}</p>
        </div>

      </div>

    </>
  )
}