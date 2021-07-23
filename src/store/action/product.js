import { GET_PRODUCTS, ADD_TO_CART, GET_CARTS} from "../constants";

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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
            priceDisc: 19.99,
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
  
