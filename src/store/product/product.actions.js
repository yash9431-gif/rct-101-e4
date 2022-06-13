import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types";

export const productload = () => ({ type: GET_PRODUCTS_LOADING })
export const productsuc = () => ({ type: GET_PRODUCTS_SUCCESS })
export const producterr = ()=> ({type:GET_PRODUCTS_ERROR})
