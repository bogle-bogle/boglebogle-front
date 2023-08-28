import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomReadyPage from './pages/CustomReadyPage';
import Main from './pages/Main';
import RedirectUrl from './components/login/RedirectUrl';
import MainPage from './pages/MainPage';
import Shop from './pages/Shop';
import Detail from './pages/Detail';
import Header from './components/header/Header';
import Cart from './pages/CartPage';
import ClubRegister from './components/club/ClubRegister';
import CompleteClubRegister from './pages/CompleteClubRegister';
import MyPet from './pages/MyPet';


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
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/clubregister" element={<ClubRegister/>}></Route>
          <Route path="/completeclubregister" element={<CompleteClubRegister/>}></Route>
          <Route path="/mypet/:memberId" element={<MyPet/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
