import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import ProductCategory from "./ProductCategory";
import PromotionCategory from "./PromotionCategory";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
            <ProductCategory />
            <PromotionCategory/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
