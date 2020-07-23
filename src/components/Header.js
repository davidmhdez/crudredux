import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="col-12 bg-success p-3 d-flex align-items-center justify-content-between">
            <Link to="/" className="mb-0 h2 text-white">Crud redux</Link>
            <Link to="/products/new" className="btn btn-danger white-text" >Add product +</Link>
        </header>
    );
};

export default Header;