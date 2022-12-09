import React from "react";

const CollectionContext = React.createContext({
  restaurants: [],
  saveRestaurant: (restaurant) => { },
  removeRestaurant: (id) => { },
});

export default CollectionContext;