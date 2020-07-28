import React from "react";

const ProdectContext = React.createContext({
  total: 0,
  products: [
    { id: 1, text: "Product one", count: 0 },
    { id: 2, text: "Product two", count: 0 },
    { id: 3, text: "Product three", count: 0 },
  ],
});

export default ProdectContext;
