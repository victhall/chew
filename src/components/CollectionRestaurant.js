import classes from './CollectionRestaurant.module.css'

export default function CollectionRestaurant(props) {



console.log('dataa', props.collectionData)

  return (
    <div>
      {Object.keys(props.collectionData).map((key, y) =>
        <div key={y}>
           <h3>{key}</h3>
            {props.collectionData[key].map((item, y) =>
            <div key={y}>{item.name} {item.price}</div>
            )}
        </div>
      )}

      {/* <p>{props.collectionName}</p>
      <h2 className={classes['restaurant-name']}>{props.name}</h2>
      <p className={classes['restaurant-address']}>{props.price}</p>
      <p className={classes['restaurant-address']}>{props.address}, {props.city}, {props.province} {props.zip_code}</p> */}
    </div>
  )
}