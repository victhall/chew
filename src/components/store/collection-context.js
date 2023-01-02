import React from "react";

const CollectionContext = React.createContext({
  restaurants: [],
  saveRestaurant: (restaurant) => {},
  removeRestaurant: (restaurant) => {} 
});

export default CollectionContext;