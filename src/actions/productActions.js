import { ADD_PRODUCTS, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, LOADING_PRODUCTS, LOADING_PRODUCTS_SUCCESS, LOADING_PRODUCTS_ERROR, GET_DELETE_PROYECT, DELETE_PROYECT_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS } from "../types";
import ax from "../config/axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function addProductAction(product){
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            await ax.post('/products',product);
            dispatch(addProductSuccess(product));
            Swal.fire('Correct!!','The product has saved successfully', 'success');
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
            toast.error('Cannot save the product');
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCTS,
    payload: true
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = status =>({
    type: ADD_PRODUCT_ERROR,
    payload: status
})

export function getProductsAction(){
    return async (dispatch) => {
        dispatch(loadProducts());
        try {
            const response = await ax.get('/products');
            // console.log(response);
            dispatch(loadProductsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(loadProductsError());
            toast.error('Cannot get the products');
        }
    }
}

const loadProducts = () => ({
    type: LOADING_PRODUCTS,
    payload: true    
})

const loadProductsSuccess = products => ({
    type: LOADING_PRODUCTS_SUCCESS,
    payload: products
})

const loadProductsError = () =>({
    type: LOADING_PRODUCTS_ERROR
})

export function deleteProductAction(id){
    return async (dispatch) => {
        dispatch(getDeleteProyect(id));
        try {
            await ax.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            Swal.fire('Product deleted','','success');
        } catch (error) {
            console.log(error);
            Swal.fire('Cannot delete this product','','error');
        }
    }
}

const getDeleteProyect = (id) =>({
    type: GET_DELETE_PROYECT,
    payload: id
})

const deleteProductSuccess = () =>({
    type: DELETE_PROYECT_SUCCESS
})

export function updateProductAction(product){
    return async (dispatch) =>{
        dispatch(updateProduct());
        try {
            await ax.put(`/products/${product.id}`, product);
            dispatch(updateProductSuccess(product));
            Swal.fire('Product Updated', '', 'success');
        } catch (error) {
            console.log(error);
            toast.error('no se puede actualizar');
        }
    }
}

const updateProduct = () =>({
    type: UPDATE_PRODUCT,
    payload: true
})

const updateProductSuccess = product =>({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: product
})