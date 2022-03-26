import Nav from "./Nav";
import Home from "./Pages/Home/Home.js";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App() {
  const user = true;
  return (

     <Router>
      <Nav /> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/posts/:postsId">
            <Single />
          </Route>
        </Switch>
     </Router>
     
   );
}

export default App;
