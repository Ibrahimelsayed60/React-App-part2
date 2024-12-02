import logo from './logo.svg';
import Header from './header/header';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Products from './products/products';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './products/productDetails';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component = {Contact}/>
        <Route exact path="/products" component = {Products}/>
        <Route exact path="/details/:id" component = {ProductDetails}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
