import { useReducer } from "react";
import CollectionContext from "./collection-context";

const defaultCollectionState = {
  restaurants: []
}

const restaurantReducer = (state, action) => {
  if (action.type === 'ADD_RESTAURANT') {

    const existingRestaurantIndex = state.restaurants.findIndex(
      (restaurant) => restaurant.name === action.restaurant.name
    );

    const existingRestaurant = state.restaurants[existingRestaurantIndex];
    let updatedRestaurants;

    if (existingRestaurant) {
      const updatedRestaurant = {
        ...existingRestaurant
      }
      updatedRestaurants = [...state.restaurants];
      updatedRestaurants[existingRestaurantIndex] = updatedRestaurant;
    } else {
      updatedRestaurants = state.restaurants.concat(action.restaurant);
    }
    return {
      restaurants: updatedRestaurants
    }
  }

  if (action.type === 'REMOVE_RESTAURANT') {
    const existingRestaurantIndex = state.restaurants.findIndex(
      (restaurant) => restaurant.name === action.name
    );

    const existingRestaurant = state.restaurants[existingRestaurantIndex];
    let updatedRestaurants;

    if (existingRestaurant) {
      updatedRestaurants = state.restaurants.filter((restaurant) => restaurant.name !== action.name)
    } else {
      const updatedRestaurant = { ...existingRestaurant };
      updatedRestaurant = [...state.restaurants];
      updatedRestaurants[existingRestaurantIndex] = updatedRestaurant;
    }
    return {
      restaurants: updatedRestaurants
    }
  }

}

const CollectionProvider = (props) => {
  const [restaurantState, dispatchRestaurantAction] = useReducer(restaurantReducer, defaultCollectionState);

  const addRestaurantToCollection = restaurant => {
    dispatchRestaurantAction({ type: 'ADD_RESTAURANT', restaurant: restaurant })
  };

  const removeRestaurantHandler = (name) => {
    dispatchRestaurantAction({ type: 'REMOVE_RESTAURANT', name: name })
  }

  const collectionContext = {
    restaurants: restaurantState.restaurants,
    saveRestaurant: addRestaurantToCollection,
    removeRestaurant: removeRestaurantHandler
  }

  return (
    <CollectionContext.Provider value={collectionContext}>
      {props.children}
    </CollectionContext.Provider>
  );
}


export default CollectionProvider;