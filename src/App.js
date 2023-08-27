import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomReadyPage from './pages/CustomReadyPage';
import Main from './pages/Main';
import RedirectUrl from './components/login/RedirectUrl';
import MainPage from './pages/MainPage';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import Cart from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="appContainer">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/customready" element={<CustomReadyPage />} />
          <Route path="/" element={<Main />}></Route>
          <Route path="/second" element={<MainPage />}></Route>
          <Route path="/auth" element={<RedirectUrl />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/detail/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
