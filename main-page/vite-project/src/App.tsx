import "./App.css";
import ProductCard from "./components/ProductCard";
import vegBurger from "./assets/vegBurger.jpeg";
function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🍔 McDonald's</h2>
        <nav>
          <ul>
            <li>Value Meals</li>
            <li>Burgers & Wraps</li>
            <li>Fries & Sides</li>
            <li>McCafe & Beverages</li>
            <li>Desserts</li>
            <li>McSaver Combos</li>
            <li>Condiments</li>
            <li>No Onion No Garlic</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header>
          <h1>Meals at McDonald's®</h1>
        </header>

        {/* Discover Menu Section */}
        <section className="menu-section">
          <h2>Discover Our Menu</h2>
          <div className="menu-categories">
            <div className="menu-card veg">
            <img src={vegBurger} alt="Veg Burger" />
             
            </div>
            <div className="menu-card chicken">
              <img src="" alt="Chicken Burgers" />
              
            </div>
            <div className="menu-card coffee">
              <img src="" alt="McCafe Cappuccino" />
             
            </div>
            <div className="menu-card dessert">
              <img src="" alt="Chocolate Overload" />
              
            </div>
          </div>
        </section>

        {/* Newly Launched Section */}
        <section className="new-launches">
          <h2>Newly Launched</h2>
          <div className="products-grid">
            <ProductCard
              name="Crispy Veggie Burger Meal"
              price="Rs257"
              img="https://via.placeholder.com/150"
            />
            <ProductCard
              name="McCrispy Chicken Meal"
              price="Rs276"
              img="https://via.placeholder.com/150"
            />
            <ProductCard
              name="Chocolate Overload McFlurry"
              price="Rs187"
              img="https://via.placeholder.com/150"
            />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="order-total">
            <h3>Total: Rs 0.00</h3>
            <button className="checkout-btn">Pay Now</button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
