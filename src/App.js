import React from 'react';
import './style/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Summoner from './components/Summoner';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div>
            <Menu/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/summoner" component={Summoner}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
