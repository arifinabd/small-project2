import { GET_PRODUCTS, ADD_TO_CART, GET_CARTS, DELETE_CART_BY_ID } from "../constants";

const initialState = {
  carts: [],
  products: [],
  product: {
    id: 0,
    type: '',
    name: '',
    caption: '',
    image: '',
    priceDisc: 0,
    priceReal: 0,
    quantity: 0,
    description: '',
  }
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      const carts = state.carts
      const findProduct = state.products.find((val) => val.id === payload)
      carts.push({...findProduct, qty: 1})
      return{
        ...state,
        carts: carts
      }
    case GET_CARTS:
      return state
    case DELETE_CART_BY_ID:
      const deleteProduct = [...state.carts];
      if (deleteProduct[payload] !== -1){
        deleteProduct.splice(payload, 1)
      }
      return{
        ...state,
        carts: deleteProduct
      }

    default:
      return state;
  }
};

export default productReducer;