import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import KakaoLoginButton from './components/login/KakaoLoginButton'; // 주석 처리
import CustomPage from './pages/CustomPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/custom" element={<CustomPage />} />
        </Routes>
      </Router>
      {/* <KakaoLoginButton /> 주석 처리하여 해당 부분을 비활성화 */}
    </>
  );
}

export default App;
