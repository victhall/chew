import { useContext, useEffect } from 'react'
import CollectionContext from './store/collection-context';
import CollectionRestaurant from './CollectionRestaurant';

export default function Collection() {
  const collectionCtx = useContext(CollectionContext);

  // const saveRestaurantHandler = (restaurant) => {
  //   const collectionRestaurant = { ...restaurant};
  //   CollectionContext.saveRestaurant(collectionRestaurant);
  // };

  let groupedCollections = collectionCtx.restaurants.reduce((groupedObj, item) => {

    groupedObj[item.collectionName] = groupedObj[item.collectionName] || [];

    groupedObj[item.collectionName].push(item)
    console.log('I RAN')
    return groupedObj;
  }, {})

  return (<ul>

     <CollectionRestaurant
      collectionData={groupedCollections}
      // onAdd={saveRestaurantHandler.bind(null, { ...restaurant})}
      />
    
  </ul>)

}