export default function reducer(state, actions) {
  switch (actions.type) {
    case "INCREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === actions.payload
            ? { ...product, count: product.count + 1 }
            : product
        ),
      };
    case "DEL":
      console.log("deleted");
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id !== actions.payload;
        }),
      };

    case "TOTALINC":
      console.log("totalinc");
      return {
        ...state,
        total: state.total + 1,
      };
    case "TOTALDEC":
      const totalrem = state.products.filter((product) => {
        return product.id === actions.payload;
      });
      const { count } = totalrem[0];
      console.log(count);
      return {
        ...state,
        total: state.total - count,
      };
    default:
      return state;
  }
}
