import { useContext } from 'react'
import CollectionContext from './store/collection-context';
import CollectionRestaurant from './CollectionRestaurant';

export default function Collection() {
  const collectionCtx = useContext(CollectionContext);

  function restaurantRemoveHandler(name) {
    collectionCtx.removeRestaurant(name)
  }

  let groupedCollections = collectionCtx.restaurants.reduce((groupedObj, item) => {

    groupedObj[item.collectionName] = groupedObj[item.collectionName] || [];

    groupedObj[item.collectionName].push(item)

    return groupedObj;
  }, {})

  return (<ul>

    <CollectionRestaurant
      collectionData={groupedCollections}
      onRemove={restaurantRemoveHandler}
    />

  </ul>)
  
}