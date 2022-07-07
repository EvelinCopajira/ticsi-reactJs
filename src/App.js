import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import CuidadosTips from './pages/CuidadosTips/CuidadosTips';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import ProductsList from './pages/ProductsList';
import Cart from './pages/Cart/Cart';

//import react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import context
import ThemeProvider from './context/ThemeContext';
import CartProvider from './context/CartContext';

function App() {
  return (
    //JSX
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/items/:category' element={<ProductsList/>} />
              <Route path='/item/:id' element={<Detail />} />
              <Route path='/cuidadostips' element={<CuidadosTips />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element= {<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
