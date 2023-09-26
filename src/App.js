import { Routes, Route } from "react-router-dom";
import "./App.css";
import CustomReadyPage from "./pages/CustomReadyPage";
import CustomReadyResult from "./pages/CustomReadyResult";
import Main from "./pages/Main";
import RedirectUrl from "./components/login/RedirectUrl";
import Shop from "./pages/Shop";
import Cart from "./pages/CartPage";
import Ordersheet from "./pages/OrderSheetPage";
import OrderComplete from "./pages/OrderComplete";
import Subscription from "./pages/Subscription";
import ClubRegister from "./components/club/ClubRegister";
import CompleteClubRegister from "./components/club/CompleteClubRegister";
import MyPet from "./pages/MyPet";
import ProductDetail from "./components/product/ProductDetail";
import HyundaiCard from "./pages/HyundaiCard";
import MbtiTest from "./pages/MbtiTest";
import Example from "./pages/Example";
import Admin from "./pages/Admin";
import MainLayout from "./pages/MainLayout";
import PlayGround from "./pages/PlayGround";
import MyPage from "./pages/MyPage";
import Suggestion from "./pages/Suggestion";
import AddPet from "./pages/AddPet";
import RouteChangeTracker from "./RouteChangeTracker";
import ThePetBox from "./pages/ThePetBox";
import TossRedirect from "./components/toss/TossRedirect";
import HeendyCarPage from "./pages/HeendyCarPage";

function App() {
  RouteChangeTracker();
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/customready" element={<CustomReadyPage />} />
          <Route path="/customresult" element={<CustomReadyResult />} />
          <Route path="/" element={<Main />}></Route>
          <Route path="/auth" element={<RedirectUrl />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/ordersheet" element={<Ordersheet />}></Route>
          <Route path="/ordercomplete" element={<OrderComplete />}></Route>
          <Route path="/sub" element={<Subscription />} />
          <Route path="/thepetbox" element={<ThePetBox />} />
          <Route path="/heendycar" element={<HeendyCarPage />}></Route>
          <Route path="/card" element={<HyundaiCard />}></Route>
          <Route path="/clubregister" element={<ClubRegister />}></Route>
          <Route path="/addpet" element={<AddPet />}></Route>
          <Route path="/playground" element={<PlayGround />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route
            path="/completeclubregister"
            element={<CompleteClubRegister />}
          ></Route>
          <Route path="/mypet/:memberId" element={<MyPet />}></Route>
          <Route path="/mbti" element={<MbtiTest />}></Route>
          <Route path="/ex" element={<Example />}></Route>
          <Route path="/tossredirect" element={<TossRedirect />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;
