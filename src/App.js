import './App.css';
import NavBar from './components/NavBar/NavBar';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import ProductsList from './pages/ProductsList';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    //JSX
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/items/:category' element={<ProductsList/>}></Route>
          <Route path='/item/:id' element={<Detail />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
