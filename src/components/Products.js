import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProductsAction} from '../actions/productActions';
import Spiner from './Spiner';
import Product from './Product';

const Products = () => {

    const dispatch = useDispatch();
    const getProducts = () => dispatch(getProductsAction());
    const products = useSelector(state => state.products.products);
    const isloading = useSelector(state => state.products.loading);

    useEffect(()=>{
        getProducts();
        // eslint-disable-next-line
    },[])

    return (
        <div className="row mt-5">
            <div className="col">
                <table className="table table-striped table-hover bg-white">
                    <thead>
                        <tr className="table-success">
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 
                            ? <tr><td colSpan="3" className="text-center">No products</td></tr>
                            : products.map( product => (
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        }
                        {isloading 
                            ?  <tr><td colSpan="3" className="text-center p-4"><Spiner/></td></tr>
                            : null 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;