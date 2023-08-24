import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import RedirectUrl from './components/login/RedirectUrl';
import MainPage from './pages/MainPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/second" element={<MainPage />}></Route>
          <Route path="/auth" element={<RedirectUrl />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
