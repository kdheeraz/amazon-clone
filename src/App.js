//import './App.css';
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header.js'
import Checkout from "./Checkout"


function App() {
  return (
    <div className="App">


      <Router >

        <Header></Header>

        <Switch>

        <Route path="/login">



<h1>Sign In</h1>
</Route>


          <Route path="/checkout">



            <Checkout></Checkout>
          </Route>

          <Route path="/">


            <Home />


          </Route>

        </Switch>

      </Router>



    </div>
  );
}

export default App;
