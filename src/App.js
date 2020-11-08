import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Car from "./components/Car";
import Cars from "./components/Cars";
import NotFound from "./components/NotFound";
import CarForm from "./components/CarForm";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path={'/cars'} component={Cars}/>
                <Route exact path={'/cars/newCar'} component={CarForm}/>
                <Route exact path={'/cars/edit/:id'} render={(props) => <CarForm {...props} edit={true}/>}/>
                <Route exact path={'/cars/:id'} component={Car}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
