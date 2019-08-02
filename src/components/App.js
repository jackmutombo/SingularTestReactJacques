import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductCreate from './products/ProductCreate';
import ProductEdit from './products/ProductEdit';
import ProductDelete from './products/ProductDelete';
import ProductList from './products/ProductList';
import StaffCreate from './staffs/StaffCreate';
import LoginAuth from './LoginAuth';
import Header from './Header';
const App = () =>{
    return (
        <div className="ui container">
           
            <BrowserRouter>
                <div>
                 <Header />
                    <Route path="/" exact component={ProductList} />
                    <Route path="/products/new" exact component={ProductCreate} />
                    <Route path="/products/edit" exact component={ProductEdit} />
                    <Route path="/products/delete" exact component={ProductDelete} />
                    <Route path="/staffs/new" exact component={StaffCreate} />
                    <Route path="/login" exact component={LoginAuth} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;