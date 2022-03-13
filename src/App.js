import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoadingPage from './pages/LoadingPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
  );
}

export default App;
