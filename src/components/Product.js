import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProductAction } from '../actions/productActions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Product = ({product}) => {

    const dispatch = useDispatch();
    const deleteProduct = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( result =>{
            if(result.value){
                dispatch(deleteProductAction(id));                
            }
        } )
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td>
                <span className="font-weight-bold">${product.price}</span>
            </td>
            <td>
                <Link to={`/products/${product.id}`} className="btn btn-success btn-sm">Update</Link>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => deleteProduct(product.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Product;