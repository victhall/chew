import React from "react";

const CollectionContext = React.createContext({
  restaurants: [],
  saveRestaurant: (restaurant) => {},
  removeRestaurant: (name) => {} 
});

export default CollectionContext;