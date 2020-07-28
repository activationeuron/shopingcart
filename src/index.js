import React, { useContext, useReducer } from "react";
import context from "./Context";
import Reducer from "./Reducer";
import reactDOM from "react-dom";
import Products from "./Products";
const App = () => {
  const initialState = useContext(context);
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state);
  return (
    <context.Provider value={{ state, dispatch }}>
      <Products />
    </context.Provider>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
