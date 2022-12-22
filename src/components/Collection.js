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
        // name={restaurant.name}
        // address={restaurant.address}
        // city={restaurant.city}
        // province={restaurant.province}
        // zip_code={restaurant.zip_code}
        // price={restaurant.price}
        // collectionName={restaurant.collectionName}
        // categories={categories}
      // onAdd={saveRestaurantHandler.bind(null, { ...restaurant})}
      />
    
  </ul>)

}