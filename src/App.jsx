import TopBar from './components/layouts/TopBar';
import Footer from './components/layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Eqa from './pages/Eqa';
import Consulting from './pages/Consulting';
import TrainingServices from './pages/TrainingServices';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/eqa/*" element={<Eqa />} />
        <Route path="/training-services/*" element={<TrainingServices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
