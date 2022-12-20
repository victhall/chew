import classes from './CollectionRestaurant.module.css'

export default function CollectionRestaurant(props) {

  return (
    <div>   
      <p>{props.collectionName}</p>   
      <h2 className={classes['restaurant-name']}>{props.name}</h2>
      <p className={classes['restaurant-address']}>{props.price}</p>
      <p className={classes['restaurant-address']}>{props.address}, {props.city}, {props.province} {props.zip_code}</p>
      </div>
  )
}