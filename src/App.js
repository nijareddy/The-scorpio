
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/login" element={<AuthPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
         <Route exact path="/wish-list" element={<WishlistPage/>}/>
         <Route exact path ="/cart" element={<CartPage/>}/>
         <Route exact path ="/product-details" element={<ProductDetailsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

