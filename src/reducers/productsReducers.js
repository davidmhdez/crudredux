import { ADD_PRODUCTS, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, LOADING_PRODUCTS, LOADING_PRODUCTS_SUCCESS, LOADING_PRODUCTS_ERROR, GET_DELETE_PROYECT, DELETE_PROYECT_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS } from "../types";

const initialState = {
    products: [],
    error: false,
    loading: false,
    proyectToDelete: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case UPDATE_PRODUCT:
        case LOADING_PRODUCTS:
        case ADD_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case LOADING_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }        
        case LOADING_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_DELETE_PROYECT:
            return {
                ...state,
                proyectToDelete: action.payload
            }
        case DELETE_PROYECT_SUCCESS:
            return{
                ...state,
               products: state.products.filter( product => product.id !== state.proyectToDelete ),
               proyectToDelete: null
            }
        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                products: state.products.map( product => product.id === action.payload.id ? action.payload : product ),
                loading: false
            }
        default:
            return state;
    }
}