import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: "Crispy Veggie Burger Medium Meal", price: "₹265.71", category: "Veg", image: "https://d37byfojjwz7vp.cloudfront.net/new_resize_456_20241205182133088255.png" },
    { id: 2, name: "McCrispy Chicken Medium Meal", price: "₹284.76", category: "Chicken", image: "https://d37byfojjwz7vp.cloudfront.net/new_resize_456_20241205182202734914.png" },
    { id: 3, name: "Peppery Chicken Surprise Burger", price: "₹265.21", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/22/0fbf18a1-5191-4cda-a09d-521a24c8c6ca_25cf57c6-48cc-47bd-b422-17e86b816422.png" },
    { id: 4, name: "McSpicy Premium Veg Medium Meal", price: "₹335.71", category: "Veg", image: "https://d37byfojjwz7vp.cloudfront.net/new_resize_456_20240828173356138931.png" },
    { id: 5, name: "McSpicy Premium Chicken Medium Meal", price: "₹335.39", category: "Chicken", image: "https://d37byfojjwz7vp.cloudfront.net/new_resize_456_20240828165250678329.png" },
    { id: 6, name: "McSpicy Paneer Medium Meal", price: "₹256.20", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/22/fb912d21-ad9d-4332-b7cf-8f65d69e2c47_1fa5998c-b486-449a-9a88-2e61cf92ff77.png" },
    { id: 7, name: "Veggie Delight Wrap", price: "₹199.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/22/198c3d14-3ce8-4105-8280-21577c26e944_779c4353-2f85-4515-94d2-208e90b830eb.png" },
    { id: 8, name: "Crispy Paneer Burger", price: "₹229.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/22/fb912d21-ad9d-4332-b7cf-8f65d69e2c47_1fa5998c-b486-449a-9a88-2e61cf92ff77.png" },
    { id: 9, name: "Veg McPuff", price: "₹170.50", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/abe4b8cdf0f1bbfd1b9a7a05be3413e8" },
    { id: 10, name: "Big Spicy Chicken Wrap", price: "₹180.99", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/22/e1fa4587-23ac-4613-af61-de659b066d19_14205d12-ea39-4894-aa85-59035020cecd.png" },
    { id: 11, name: "Big Spicy Chicken Wrap Combo", price: "₹220.99", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/22/f631f834-aec2-410d-ab9d-7636cd53d7a0_8801a3c7-ad83-4f7c-bcb0-76101fadde91.png" },
    //{ id: 12, name: "Chicken McMuffin", price: "₹200.00", category: "Chicken", image: "https://via.placeholder.com/150" },
    //{ id: 13, name: "Crispy Fish Burger", price: "₹290.00", category: "Fish", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Classic Veggie Wrap", price: "₹185.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/12/7a3244bf-3091-4ae6-92e3-13be841a753e_b21f7a05-24b3-43f8-a592-beb23e6b69fa.png" },
    //{ id: 15, name: "Grilled Chicken Burger", price: "₹310.00", category: "Chicken", image: "https://via.placeholder.com/150" },
    //{ id: 16, name: "Fish McMuffin", price: "₹250.99", category: "Fish", image: "https://via.placeholder.com/150" },
    //{ id: 17, name: "Egg Cheese Muffin", price: "₹200.50", category: "Egg", image: "https://via.placeholder.com/150" },
    { id: 18, name: "McVeggie Deluxe", price: "₹300.20", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/15/bc20f4ef-184a-498e-ad94-95da5f1891e1_2c70984c-ae04-4f00-8a3a-3a6fd33deee0.png" },
    //{ id: 19, name: "Fish Fillet Meal", price: "₹370.99", category: "Fish", image: "https://via.placeholder.com/150" },
    { id: 20, name: "Spicy Chicken Wrap", price: "₹250.00", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/22/e1fa4587-23ac-4613-af61-de659b066d19_14205d12-ea39-4894-aa85-59035020cecd.png" },
    { id: 21, name: "Veggie Supreme Burger", price: "₹215.00", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/21/2cf63c01-fef1-49b6-af70-d028bc79be7b_bfe88b73-33a9-489c-97f3-fb24631de1fc.png" },
    //{ id: 22, name: "Fish and Fries Meal", price: "₹310.25", category: "Fish", image: "https://via.placeholder.com/150" },
    //{ id: 23, name: "Chicken Fries Combo", price: "₹289.00", category: "Chicken", image: "https://via.placeholder.com/150" },
    { id: 24, name: "Veg Maharaja Mac Burger", price: "₹299.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/21/06354d09-be1b-406c-86b5-49dc9b5062d1_2f80f39e-c951-4ca6-8fca-a243a18c3448.png" },
    //{ id: 25, name: "Egg McMuffin", price: "₹180.00", category: "Egg", image: "https://via.placeholder.com/150" },
    { id: 26, name: "Chicken Nuggets", price: "₹340.99", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/1ca7abb262e8880f5cb545d0d2f9bb9b" },
    //{ id: 27, name: "McFish Deluxe", price: "₹380.50", category: "Fish", image: "https://via.placeholder.com/150" },
    { id: 28, name: "McSpicy Premium Veg Burger", price: "₹199.90", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/29/1a9faafd-b523-40a2-bdc6-f35191cfcf4a_0c462cb4-3843-4997-b813-dc34249b7c91.png" },
    { id: 29, name: "McCheese Burger Veg", price: "₹210.50", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/21/de84d4cc-6169-4235-942e-e4883a81c2e0_d90762c6-283f-46e5-a6ed-14ee3262bae0.png" },
    //{ id: 30, name: "Grilled Fish Sandwich", price: "₹320.00", category: "Fish", image: "https://via.placeholder.com/150" },
    { id: 31, name: "McCheese Burger Veg Combo", price: "₹299.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/22b25dd0-80ed-426b-a323-82c6b947612d_df827568-54f9-4329-af60-1fff38d105e9.png" },
    //{ id: 32, name: "Egg Burger Meal", price: "₹210.99", category: "Egg", image: "https://via.placeholder.com/150" },
    { id: 33, name: "McCheese Burger Veg Combo with Corn", price: "₹320.00", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/29/9068eeb6-c774-4354-8c18-bf2ddcc94d10_631c39d1-d78c-4275-a14f-60670ce5aee4.png" },
    //{ id: 34, name: "Spicy Fish Wrap", price: "₹270.00", category: "Fish", image: "https://via.placeholder.com/150" },
    { id: 35, name: "Veg Maharaja Mac Burger Combo", price: "₹239.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/d064fb5e-fb2e-4e1d-9515-18f26489f5b1_f6f49dba-2ae7-4ebf-8777-548c5ad4d799.png" },
    { id: 36, name: "McVeggie Burger with Multi-Millet Bun", price: "₹289.00", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/18/397caee8-4da3-4143-98b1-e4dac155ab3e_0ed975df-7665-4f3a-ae16-8a7eb008afd6.png" },
    //{ id: 37, name: "Egg Salad Wrap", price: "₹185.00", category: "Egg", image: "https://via.placeholder.com/150" },
    //{ id: 38, name: "Fish Burger", price: "₹300.50", category: "Fish", image: "https://via.placeholder.com/150" },
    { id: 39, name: "Burger Combo for 2: McAloo Tikki", price: "₹199.00", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ea7ba594c7d77cb752de9a730fbcb3bf" },
    //{ id: 40, name: "Egg Cheese Wrap", price: "₹175.00", category: "Egg", image: "https://via.placeholder.com/150" },
    { id: 41, name: "McVeggie Burger + Fries (R)", price: "₹229.99", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/52a347eab543d461b1a15b609779b8c2" },
    { id: 42, name: "McAloo Tikki Double Patty Burger Combo", price: "₹299.00", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/1bcd9724fca70871a0e1fdc298c1f0e0" },
    //{ id: 43, name: "McFish Sandwich", price: "₹260.50", category: "Fish", image: "https://via.placeholder.com/150" },
    //{ id: 44, name: "Egg Sandwich", price: "₹150.00", category: "Egg", image: "https://via.placeholder.com/150" },
    { id: 45, name: "McAloo Tikki Burger Happy Meal", price: "₹180.00", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/22/ea4edc48-32b1-4399-b5d3-cab678c1455f_07a6817c-def0-43bd-a05a-c8740a903d76.png" },
    { id: 46, name: "Burger Combo for 2: McCheese Burger Veg", price: "₹250.99", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/857b57ae6a17e12e61174a3a45fe8fc0" },
    //{ id: 47, name: "Egg McGrill", price: "₹210.00", category: "Egg", image: "https://via.placeholder.com/150" },
    { id: 48, name: "Mexican McAloo Tikki NONG Burger Combo ( M)", price: "₹240.00", category: "Veg", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/6/1fd6abac-0bf8-4ee9-86b0-d8f5261070ec_e1c15946-e866-4b54-8bb3-f10ff76a7f1f.png" },
    { id: 49, name: "Birthday Party Package - McVeggie", price: "₹2255.80", category: "Chicken", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/567411605ac9c72680aa742e17fb83d5" },
    //{ id: 50, name: "Crispy Fish Tacos", price: "₹300.00", category: "Fish", image: "https://via.placeholder.com/150" },
  ];

  const filters = ["All", "Veg", "Chicken"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('₹', '')), 0);

  return (
    <div className="main-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">🍔 McDonald's</div>
        <ul className="menu">
          <li><button onClick={() => setSelectedCategory('All')}>All</button></li>
          <li><button onClick={() => setSelectedCategory('Veg')}>Veg</button></li>
          <li><button onClick={() => setSelectedCategory('Chicken')}>Non-Veg</button></li>
          {/* <li><button onClick={() => setSelectedCategory('Fish')}>Fish</button></li>
          <li><button onClick={() => setSelectedCategory('Egg')}>Egg</button></li> */}
        </ul>
      </aside>

      {/* Main Content*/} 
      <div className="content">
        <h2 className="title">Value Meals</h2>
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selectedCategory === filter ? "active" : ""}`}
              onClick={() => setSelectedCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="menu-card"
              onClick={() => addToCart(item)}
            >
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
     
      {/* Cart Section */}
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-footer">
              <div className="total-price">Total: ₹{totalPrice.toFixed(2)}</div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
