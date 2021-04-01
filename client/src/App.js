import ShopScreen from "./screens/ShopScreen";
import { Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { useDispatch } from "react-redux";
import { searchProduct } from "./actions/productActions";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div className="grid-container">
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Route path="/search/:word?" component={ShopScreen}></Route>
        <Route path="/shop/:categoryName?/:id?" component={ShopScreen}></Route>
        <Route path="/product/:id" component={ShopScreen}></Route>
        {/* <Route path="/category/:categoryName" component={ShopScreen}></Route> */}
        {/* <Route path="/shop/:categorytName?" component={ShopScreen}></Route> */}
        <Route path="/cart" component={CartScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
