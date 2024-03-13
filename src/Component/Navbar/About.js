// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './About.css';
// import { Link } from 'react-router-dom';

// function About() {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get('https://api.escuelajs.co/api/v1/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   const handleSearch = () => {
//     // Filter products based on search term
//     const filteredProducts = products.filter(product =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setProducts(filteredProducts);
//   };
  
//   const addToCart = (product) => {
//     setCart(prevCart => [...prevCart, product]);
//   };

//   const handleCartClick = () => {
//     console.log('Cart Contents:', cart);
//     // Here you can do something with the cart, like displaying it in a modal or redirecting to a cart page
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <div>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//           placeholder="Search by product title..."
//         />
//         <button onClick={handleSearch}>Search</button>
//         </div>
//         <Link to='/about/cart'><button onClick={handleCartClick}>View Cart</button></Link>
        
//       </div>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product.id} className="product">
//             <h2>{product.title}</h2>
//             {/* <p>{product.description}</p> */}
//             <p>Price: ${product.price}</p>
//             <img src={product.images[0]} alt={product.title} />
//             <button onClick={() => addToCart(product)}>Add</button>
//           </div>
//         ))}
//       </div>
     
//     </div>
//   );
// }

// export default About;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/CartActions';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleSearch = () => {
    // Filter products based on search term
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleCartClick = () => {
    console.log('Cart Contents:', cart.cartItems);
    // Here you can do something with the cart, like displaying it in a modal or redirecting to a cart page
  };

  return (
    <div>
      <div className="search-container">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search by product title..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <Link to='/about/cart'><button onClick={handleCartClick}>View Cart</button></Link>

      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            {/* <p>{product.description}</p> */}
            <p>Price: ${product.price}</p>
            <img src={product.images[0]} alt={product.title} />
            <button onClick={() => dispatch(addToCart(product))}>Add</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;

