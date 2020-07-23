import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductAction } from '../actions/productActions';
import ax from '../config/axios';
import { toast } from 'react-toastify';

const UpdateProduct = () => {    

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const updateProduct = product => dispatch(updateProductAction(product));
    

    const [ product, setProduct ] = useState({
        name: '',
        price: 0
    });

    const getProduct = async (id) =>{
        try {
            const response = await ax.get(`/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
            toast.error('no se encontro el producto');
        }
    }

    useEffect(()=>{
        const { id } = params;
        if(id){
            getProduct(id);
        }else{
            history.push('/');
        }
        // eslint-disable-next-line
    },[])

    const handleChange = e =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if( product.name.trim() === '' || product.price <= 0 ){
            toast.error('All field are required');
            return;
        }
        updateProduct(product);
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
                                    value={product.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    placeholder="Add your product price"
                                    value={product.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-success btn-block" >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpdateProduct;