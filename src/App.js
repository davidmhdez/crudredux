import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import UpdateProduct from './components/UpdateProduct';

import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (    
      <BrowserRouter>
        <Provider store={store}>
          <div className="container-fluid bg-gray min-vh-100">
            <div className="row">
              <Header/>
            </div>
            <ToastContainer/>
            <Switch>
                <Route exact path="/" component={Products}/>
                <Route exact path="/products/new" component={NewProduct}/>
                <Route exact path="/products/:id" component={UpdateProduct}/>
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>    
  );
}

export default App;
