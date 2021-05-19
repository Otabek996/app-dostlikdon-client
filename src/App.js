import React from 'react';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home";
import NewsView from "./pages/NewsView";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout";
import AdminMenus from "./pages/AdminMenus";
import AdminNews from "./pages/AdminNews";


const App = () => {
    return (
        <BrowserRouter>
            {window.location.href.includes("/admin") ? "" :
                <NavBar/>
            }
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news-view" exact component={NewsView}/>
            <Route path="/Login" exact component={Login}/>
            <Route path="/admin/menus" component={AdminMenus}/>
            <Route path="/admin/news" component={AdminNews}/>
          </Switch>
            {window.location.href.includes("/admin") ? "" :
                <Footer/>
            }
          <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;