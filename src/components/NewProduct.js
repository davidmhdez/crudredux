import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../actions/productActions';
import { toast } from 'react-toastify';

const NewProduct = ({history}) => {

    const dispatch = useDispatch();

    const addProducts = (product) =>  dispatch(addProductAction(product));
    const loading = useSelector( state => state.products.loading )

    const [ product, setProduct ] = useState({
        name: '',
        price: 0
    });

    const handleChange = e =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(product.name.trim() === '' || product.price <= 0){
            toast.error('All fields are required')
            return;
        }

        addProducts(product);
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-5">
                    <div className="card-body">
                        <h4 className="text-muted text-center">Add new product</h4>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Product name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Add your product name"
                                    onChange={handleChange}
                                    value={product.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    placeholder="Add your product price"
                                    onChange={handleChange}
                                    value={product.price}
                                />
                            </div>
                            <button type="submit" className="btn btn-success btn-block" >
                                {loading                                     
                                    ? <Fragment><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span className="ml-2" >Saving...</span></Fragment>
                                    : <span>Add</span>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;