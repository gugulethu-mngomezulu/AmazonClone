import './App.css';
import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import Products from './Products/products';
import Cart from './Cart/cart';
import Footer from './Component/Navbar/Footer/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
