import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import Users from "./components/Page/UsersListPage/Users";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?/:isEdit?" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
