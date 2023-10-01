import { Routes, Route } from 'react-router-dom';
import './App.css';
import RouteChangeTracker from './RouteChangeTracker';
import { Suspense, lazy } from 'react';

const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/CartPage'));
const Ordersheet = lazy(() => import('./pages/OrderSheetPage'));
const OrderComplete = lazy(() => import('./pages/OrderComplete'));
const ClubRegister = lazy(() => import('./components/club/ClubRegister'));
const CompleteClubRegister = lazy(() =>
  import('./components/club/CompleteClubRegister'),
);
const MyPet = lazy(() => import('./pages/MyPet'));
const ProductDetail = lazy(() => import('./components/product/ProductDetail'));
const HyundaiCard = lazy(() => import('./pages/HyundaiCard'));
const MbtiTest = lazy(() => import('./pages/MbtiTest'));
const Admin = lazy(() => import('./pages/Admin'));
const MainLayout = lazy(() => import('./pages/MainLayout'));
const PlayGround = lazy(() => import('./pages/PlayGround'));
const MyPage = lazy(() => import('./pages/MyPage'));
const Suggestion = lazy(() => import('./pages/Suggestion'));
const AddPet = lazy(() => import('./pages/AddPet'));
const ThePetBox = lazy(() => import('./pages/ThePetBox'));
const TossRedirect = lazy(() => import('./components/toss/TossRedirect'));
const HeendyCarPage = lazy(() => import('./pages/HeendyCarPage'));
const Landing = lazy(() => import('./pages/Landing'));
const TossCardRegisterRedirect = lazy(() =>
  import('./components/toss/TossCardRegisterRedirect'),
);
const RedirectUrl2 = lazy(() => import('./components/login/RedirectUrl2'));

function App() {
  RouteChangeTracker();
  return (
    <>
      <Suspense>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/suggestion" element={<Suggestion />} />
            <Route path="/" element={<Landing />}></Route>
            {/* <Route path="/" element={<Main />}></Route> */}
            <Route path="/auth" element={<RedirectUrl2 />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/ordersheet" element={<Ordersheet />}></Route>
            <Route path="/ordercomplete" element={<OrderComplete />}></Route>
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
            <Route path="/tossredirect" element={<TossRedirect />}></Route>
            <Route
              path="/tosscardregisterredirect"
              element={<TossCardRegisterRedirect />}
            ></Route>
          </Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
