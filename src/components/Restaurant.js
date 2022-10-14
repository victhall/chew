import classes from './Restaurant.module.css';

export default function Restaurant(props) {

  return (
    <>
      <div className={classes['restaurant-container']}>
        <img className={classes['restaurant-img']} src={props.image} />
        <div className={classes['inner-container']}>
          <h2 className={classes['restaurant-name']}>{props.name}</h2>
          <div className={classes['price-cuisine']}>
            <p className={classes.price}>{props.price}</p>
            <p className={classes.cuisines}>&#x2022; {props.cuisines}</p>
          </div>
          <p className={classes.cuisines}>{props.address}, Toronto</p>
        </div>

      </div>

    </>
  )
}