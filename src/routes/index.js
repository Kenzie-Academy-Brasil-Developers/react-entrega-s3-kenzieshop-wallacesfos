import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/home/home';
import Login from "../pages/login/index"

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}