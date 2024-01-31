import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  //we cut everything from state management to context values here in app component as we're outsourcing context and state into a seperate provider component in shopping cart context jsx component

  return (
    <CartContextProvider>
      <Header
      // cart={shoppingCart}
      // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      {/* here we are embracing component composition and we are using the shop component around the wrapper of that list of products and we got rid of one layer of component nesting but it is not the optimal solution as all your code will end up in the app component */}
      {/* <Shop onAddItemToCart={handleAddItemToCart}> */}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* <Product {...product} onAddToCart={handleAddItemToCart} /> */}
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
