import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import KakaoLoginButton from './components/login/KakaoLoginButton';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
      <KakaoLoginButton></KakaoLoginButton>
    </>
  );
}

export default App;
