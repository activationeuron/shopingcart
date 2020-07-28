import React, { useContext, useEffect } from "react";
import ProductContext from "./Context";
function Products() {
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    document.title = `Cart(${state.total})`;
  }, [state.total]);
  return (
    <div className="App">
      <ProductContext.Provider>
        <div>
          <div className=" bg-blue-400 text-2xl py-2 text-white h-16">
            <div className="relative">
              <svg
                width="48"
                height="48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M16 46a4 4 0 100-8 4 4 0 000 8zM40 46a4 4 0 100-8 4 4 0 000 8z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.34 12H46l-3.36 16.78a4 4 0 01-4 3.22H17.5a4 4 0 01-4-3.48L10.46 5.48A4 4 0 006.5 2H2"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="absolute top-0 right-1  mx-4 my-1">
                {state.total}
              </span>
            </div>
          </div>
          {state.products.map((product) => {
            return (
              <div key={product.id} className="flex items-center">
                <div className="text-xl">{product.text}</div>
                <div
                  className={
                    "bg-blue-200 text-black font-sm px-2 py-2 mx-4 " +
                    (product.count === 0 ? "bg-blue-700" : "bg-green-300")
                  }
                >
                  {product.count}
                </div>
                <div>
                  <button
                    className="mx-2 my-2 py-2 px-2  rounded-sm bg-white bg-blue-400"
                    onClick={() => {
                      dispatch({ type: "INCREMENT", payload: product.id });
                      dispatch({ type: "TOTALINC" });
                    }}
                  >
                    INCREMENT
                  </button>
                  <button
                    className="mx-2 my-2 py-2 px-2  rounded-sm bg-white bg-red-400"
                    onClick={() => {
                      dispatch({ type: "TOTALDEC", payload: product.id });
                      dispatch({ type: "DEL", payload: product.id });
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </ProductContext.Provider>
    </div>
  );
}

export default Products;
