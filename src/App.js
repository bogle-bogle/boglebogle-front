import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomReadyPage from './pages/CustomReadyPage';
import Main from './pages/Main';
import RedirectUrl from './components/login/RedirectUrl';
import MainPage from './pages/MainPage';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import Cart from './pages/CartPage';
import Ordersheet from './pages/OrderSheetPage';
import Subscription from './pages/Subscription';
import Heendycar from './pages/Heendycar';
import ClubRegister from './components/club/ClubRegister';
import CompleteClubRegister from './components/club/CompleteClubRegister';
import MyPet from './pages/MyPet';
import ProductDetail from './components/product/ProductDetail';
import HyundaiCard from './pages/HyundaiCard';

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/customready" element={<CustomReadyPage />} />
          <Route path="/" element={<Main />}></Route>
          <Route path="/second" element={<MainPage />}></Route>
          <Route path="/auth" element={<RedirectUrl />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/ordersheet" element={<Ordersheet />}></Route>
          <Route path="/sub" element={<Subscription />} />
          <Route path="/heendycar" element={<Heendycar />}></Route>
          <Route path="/card" element={<HyundaiCard />}></Route>
          <Route path="/clubregister" element={<ClubRegister />}></Route>
          <Route
            path="/completeclubregister"
            element={<CompleteClubRegister />}
          ></Route>
          <Route path="/mypet/:memberId" element={<MyPet />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
