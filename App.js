import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';


function App() {
const [cart, setCart] = useState([]);
const[page, setPage] = useState('products');

const [products] = useState([
{
  name: 'Introduction to Algorithms',
  cost: '$124.99',
  image: 
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F4%2F41%2FClrs3.jpeg%2F220px-Clrs3.jpeg&f=1&nofb=1',
},
{
  name: 'C Programming',
  cost: '$69.99',
  image: 
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.codewithc.com%2Fwp-content%2Fuploads%2F2014%2F07%2Fc-programming-language1.gif&f=1&nofb=1'
},
]);

const addToCart = (product) => {
  setCart([...cart, product]);
};

const removeFromCart = (productToRemove) => {
  setCart(cart.filter(product => product !== productToRemove));
};

const navigateTo = (nextPage) => {
  setPage(nextPage);
};

const renderProducts = () => (
  <>
  <h1>Products</h1>
  <div className="products">
  {products.map((product, idx) => (
    <div className="product" key={idx}>
      <h2>{product.name}</h2>
      <h3>{product.cost}</h3>
      <img src={product.image} alt={product.name}/>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  ))}
</div>
</>
);

const renderCart = () => (
  <>
  <h1>Cart</h1>
  <div className="products">
  {cart.map((product, idx) => (
    <div className="product" key={idx}>
      <h2>{product.name}</h2>
      <h3>{product.cost}</h3>
      <img src={product.image} alt={product.name}/>
      <button onClick={() => removeFromCart(product)}>
        Remove
      </button>
    </div>
  ))}
</div>
</>
);

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})</button>
      </header>

      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products </button>

      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
  </div>
  );
}

export default App;
