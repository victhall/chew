import { IoHeart } from "react-icons/io5";
import classes from './FavouritesIcon.module.css'

export default function FavouritesIcon() {
  return (
    <div className={classes['favourites']}>
    <IoHeart className={classes['favourites-icon']}/>
    </div>
  )
}