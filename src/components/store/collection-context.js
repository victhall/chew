import React from "react";

const CollectionContext = React.createContext({
  restaurants: [],
  saveRestaurant: (restaurant) => { }
});

export default CollectionContext;