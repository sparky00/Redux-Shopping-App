import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './components/Product';
import NavbarComponent from './components/NavbarComponent';
import Cart from './components/Cart';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <NavbarComponent/>
    
      <Routes> 
        <Route exact path='/' element={<Product/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>             
    
     
    </div>
    </Router>
    </Provider>
  );
}

export default App;
