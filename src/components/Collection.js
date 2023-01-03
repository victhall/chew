import { useContext } from 'react'
import CollectionContext from './store/collection-context';
import CollectionRestaurant from './CollectionRestaurant';
import classes from './collection.module.css'

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

    {collectionCtx.restaurants.length ? <CollectionRestaurant
      collectionData={groupedCollections}
      onRemove={restaurantRemoveHandler}
    /> : <h2 className={classes.message}>You have nothing saved.</h2>}

  </ul>)

}