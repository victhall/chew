import { useContext } from 'react'
import CollectionContext from './store/collection-context';
import CollectionRestaurant from './CollectionRestaurant';

export default function Collection() {
  const collectionCtx = useContext(CollectionContext);

  // const saveRestaurantHandler = (restaurant) => {
  //   const collectionRestaurant = { ...restaurant};
  //   CollectionContext.saveRestaurant(collectionRestaurant);
  // };
  
  return (<ul>
    {collectionCtx.restaurants && collectionCtx.restaurants.map((restaurant) => {
      return <CollectionRestaurant
        name={restaurant.name}
        address={restaurant.address}
        collectionName={restaurant.collectionName}
        // onAdd={saveRestaurantHandler.bind(null, { ...restaurant})}
      />
    })}
  </ul>)



}