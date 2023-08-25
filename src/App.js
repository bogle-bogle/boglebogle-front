import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomReadyPage from './pages/CustomReadyPage';
import Main from './pages/Main';
import RedirectUrl from './components/login/RedirectUrl';
import MainPage from './pages/MainPage';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Routes>
          <Route path="/customready" element={<CustomReadyPage />} />
          <Route path="/" element={<Main />}></Route>
          <Route path="/second" element={<MainPage />}></Route>
          <Route path="/auth" element={<RedirectUrl />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
