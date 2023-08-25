import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import KakaoLoginButton from './components/login/KakaoLoginButton'; // 주석 처리
// import CustomPage from './pages/CustomPage';
import CustomReadyPage from './pages/CustomReadyPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/customready" element={<CustomReadyPage />} />
        </Routes>
      </Router>
      {/* <KakaoLoginButton /> 주석 처리하여 해당 부분을 비활성화 */}
    </>
  );
}

export default App;
