import classes from './Restaurant.module.css';
import { CiBookmark } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";

export default function Restaurant(props) {
  return (
    <>

      <div className={classes['restaurant-container']}>
        <div className={classes['img-container']}>
          <img className={classes['restaurant-img']} src={props.image} />
        </div>
        <div className={classes['inner-container']}>
          <div className={classes['restaurant-header']}>
            <h2 className={classes['restaurant-name']}>{props.name}</h2>
            <CiBookmark className={classes['save-icon']} />
          </div>
          <div className={classes['price-cuisine']}>
            <p className={classes.price}>{props.price}</p>
            <p className={classes['bullet-point']}>&#8226;</p>
            <p className={classes.cuisines}>{props.cuisines}</p>
          </div>
          <p className={classes.address}><HiOutlineLocationMarker />{props.address}, {props.city}, {props.province} {props.zip_code}</p>
        </div>
        <p><BsPhone />{props.phone}</p>
        <p><BiLinkAlt/> <a href={props.url}> Website</a></p> 
      </div>

    </>
  )
}