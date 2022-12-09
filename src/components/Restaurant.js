import classes from './Restaurant.module.css';
import { CiBookmark } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useRef, useState } from 'react';
import SaveModal from './UI/SaveModal';

export default function Restaurant(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const collectionNameRef = useRef();

  function openModal() {
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false)
  };

  const starArray = [...Array(5).keys()].map(i => i + 1);

  const modaldetails =
    <div>
      <span>      
        <form>
        <input
          ref={collectionNameRef}
          placeholder='Collection name'
          type='text'
        />
       <button>+</button>
      </form></span>

      <div></div>
    </div>

  return (
    <>
      <div className={classes['restaurant-container']}>
        <div className={classes['img-container']}>
          <img className={classes['restaurant-img']} src={props.image} />
        </div>
        <div className={classes['inner-container']}>
          <div className={classes['restaurant-header']}>
            <h2 className={classes['restaurant-name']}>{props.name}</h2>
            <CiBookmark className={classes['save-icon']} onClick={openModal} />
          </div>

          <div className={classes['star-rating']}>
            {starArray.map(i => (
              <FaStar
                className={classes.star}
                key={i}
                color={props.rating >= i ? '#ea4336' : "lightgrey"}
              />
            ))}
            <p>{props.rating}</p>
          </div>

          <div className={classes['price-cuisine']}>
            <p>{props.price}</p>
            <p className={classes['bullet-point']}>&#8226;</p>
            <p>{props.cuisines}</p>
            <p className={classes['bullet-point']}>&#8226;</p>
            <p>{props.city}</p>
          </div>
          <p className={classes.address}><HiOutlineLocationMarker className={classes.icon} /> {props.address}, {props.city}, {props.province} {props.zip_code}</p>
          <p className={classes.phone}><BsPhone className={classes.icon} /> {props.phone}</p>
          <p className={classes.url}><BiLinkAlt className={classes.icon} /> <a href={props.url}> Website</a></p>
        </div>
      </div>
      {isModalOpen && <SaveModal>{modaldetails}</SaveModal>}
    </>
  )
}

