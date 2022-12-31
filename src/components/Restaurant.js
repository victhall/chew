import classes from './Restaurant.module.css';
import { CiBookmark } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useState, useContext } from 'react';
import SaveModal from './UI/SaveModal';
import CollectionContext from './store/collection-context'
import CollectionForm from './CollectionForm';

export default function Restaurant(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const collectionCtx = useContext(CollectionContext);

  function addToCollection(collectionName) {
    collectionCtx.saveRestaurant({
      collectionName: collectionName,
      name: props.name,
      address: props.address,
      city: props.city,
      province: props.province,
      zip_code: props.zip_code,
      price: props.price,
      is_closed: props.is_closed,
      url: props.url,
      id: props.id
    })
  }

  function openModal() {
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false)
  };

  const starArray = [...Array(5).keys()].map(i => i + 1);

  const uniqueTitle = [];

  collectionCtx.restaurants.filter(element => {
    const isDuplicate = uniqueTitle.includes(element.collectionName);

    if (!isDuplicate) {
      uniqueTitle.push(element.collectionName);

      return true;
    }
    return false;
  });

  const modaldetails =
    <div>
      <CollectionForm onAddToCollection={addToCollection} title={uniqueTitle} onCloseModal={closeModal}/>
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
      {isModalOpen && <SaveModal onCloseModal={closeModal}>{modaldetails}</SaveModal>}
    </>
  )
}

