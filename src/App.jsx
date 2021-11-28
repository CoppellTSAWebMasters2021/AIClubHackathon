import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import JoinNow from './pages/JoinNow.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinnow" element={<JoinNow />} />
      </Routes>
    </Router>
  );
}

export default App;
