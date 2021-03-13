
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import {Buy} from "./components/Buy";
import {Home} from "./components/Home";
import {Signup} from "./components/Signup";
import {Login} from "./components/Login";
import {Sell} from "./components/Sell";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <NavigationBar/>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/sell">
                        <Sell />
                    </Route>
                    <Route path="/buy">
                        <Buy />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
