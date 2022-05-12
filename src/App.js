import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Login from "./components/Login";
import Main from "./components/Main";
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
