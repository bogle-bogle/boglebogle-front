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
import OrderComplete from './pages/OrderComplete';
import Subscription from './pages/Subscription';
import Heendycar from './pages/Heendycar';
import ClubRegister from './components/club/ClubRegister';
import CompleteClubRegister from './pages/CompleteClubRegister';
import MyPet from './pages/MyPet';
import ProductDetail from './components/product/ProductDetail';
import HyundaiCard from './pages/HyundaiCard';
import MbtiTest from './pages/MbtiTest';
import Example from './pages/Example';
import { Helmet } from 'react-helmet-async';
import Header2 from './components/header/Header2';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="appContainer">
      <GlobalStyle />
      <Helmet>
        <title>THEPET</title>
      </Helmet>
      <Router>
        {/* <Header /> */}
        <Header2 />
        <div className="contentsContainer">
          <Routes>
            <Route path="/customready" element={<CustomReadyPage />} />
            <Route path="/" element={<Main />}></Route>
            <Route path="/second" element={<MainPage />}></Route>
            <Route path="/auth" element={<RedirectUrl />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/ordersheet" element={<Ordersheet />}></Route>
            <Route path="/ordercomplete" element={<OrderComplete />}></Route>
            <Route path="/sub" element={<Subscription />} />
            <Route path="/heendycar" element={<Heendycar />}></Route>
            <Route path="/card" element={<HyundaiCard />}></Route>
            <Route path="/clubregister" element={<ClubRegister />}></Route>
            <Route
              path="/completeclubregister"
              element={<CompleteClubRegister />}
            ></Route>
            <Route path="/mypet/:memberId" element={<MyPet />}></Route>
            <Route path="/mbti" element={<MbtiTest />}></Route>
            <Route path="/ex" element={<Example />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
