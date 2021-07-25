import { GET_PRODUCTS, ADD_TO_CART, GET_CARTS, DELETE_CART_BY_ID} from "../constants";

export const getProducts = () => {
  // request ke Backend
  return {
    type: GET_PRODUCTS, 
    payload: [
        {
            id: 1,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 11.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 2,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 12.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 3,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 13.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 4,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 14.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 5,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 15.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 6,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 16.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 7,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 17.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 8,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 18.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            id: 9,
            type: 'Red Marron',
            name: 'Nice SHIRT',
            caption: 'Kacamata tampan dan Berani',
            image: '/assets/orang.jpg',
            priceDisc: 19.99,
            priceReal: 39.99,
            quantity: 7,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
    ]
  };
};

export const addToCart = (id) => {
    return {
      type: ADD_TO_CART,
      payload: id
  }
}

export const getCarts = () => {
    return{
        type: GET_CARTS,
    }
}

export const deleteCart = (index) => {
    return{
        type: DELETE_CART_BY_ID,
        payload:index
    }
}
  
