import { useContext } from 'react'
import CollectionContext from './store/collection-context';
import CollectionRestaurant from './CollectionRestaurant';

export default function Collection() {
  const collectionCtx = useContext(CollectionContext);

  // const saveRestaurantHandler = (restaurant) => {
  //   const collectionRestaurant = { ...restaurant};
  //   CollectionContext.saveRestaurant(collectionRestaurant);
  // };

//   Get collection names, save in an array,
// Loop through categories, 
//render restaurants under categories of category name === collection name


  return (<ul>
    {collectionCtx.restaurants && collectionCtx.restaurants.map((restaurant) => {
      return <CollectionRestaurant
        name={restaurant.name}
        address={restaurant.address}
        city={restaurant.city}
        province={restaurant.province}
        zip_code={restaurant.zip_code}
        price={restaurant.price}
        collectionName={restaurant.collectionName}
        // onAdd={saveRestaurantHandler.bind(null, { ...restaurant})}
      />
    })}
  </ul>)



}