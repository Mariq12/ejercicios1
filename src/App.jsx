import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Home2 from './page/Home2';
import Home3 from './page/Home3';
import Header from './components/header/Header';
import Home4 from './page/Home4';
import Home5 from './page/Home5';
import Home6 from './page/Home6';
import Home7 from './page/Home7';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/home5" element={<Home5 />} />
        <Route path="/home6" element={<Home6 />} />
        <Route path="/home7" element={<Home7 />} />
      </Routes>
    </Router>
  );
};

export default App;