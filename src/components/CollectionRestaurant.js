import classes from './CollectionRestaurant.module.css'
export default function CollectionRestaurant(props) {

console.log('dataa', props.collectionData)

  return (
    <div>
      {Object.keys(props.collectionData).map((key, y) =>
      <>
        <div key={y}>
           <h2 className={classes['collection-name']}>{key}</h2>
            {props.collectionData[key].map((item, y) =>
            <div key={y} className={classes.container}>
              <div className={classes['restaurant-header']}>
              <h3 className={classes['restaurant-name']}>{item.name}</h3>
              <p className={classes['restaurant-price']}>{item.price}</p>
              </div>
              <p className={classes['restaurant-address']}>{item.address}, {item.city}, {item.province} {item.zip_code}</p>
              <a href={item.url}><p>Make a reservation</p></a>
              </div>
            )}
        </div>
        </>
      )}
    </div>
  )
}