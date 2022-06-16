import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import ProductsList from './pages/ProductsList';
import Cart from './pages/Cart';

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
              <Route path='/' element={<Home />}></Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/items/:category' element={<ProductsList/>}></Route>
              <Route path='/item/:id' element={<Detail />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='*' element={<NotFound />}></Route>
              <Route path='/cart' element= {<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
