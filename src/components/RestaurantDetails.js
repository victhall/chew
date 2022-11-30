import { CiBookmark } from "react-icons/ci";

export default function RestaurantDetails(props) {
  return (
    <div>
      <p onClick={props.closeDetails}>X</p>
    <div>{props.image}</div>
    <div>{props.name}</div>
    <div>{props.price}</div>
    <CiBookmark />
    <div>{props.cuisines}</div>
    <div>{props.address}</div>
    <div>{props.phone}</div>
    <div>{props.url}</div>
  </div>
  )
}