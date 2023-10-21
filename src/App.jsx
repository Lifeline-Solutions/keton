import TopBar from './components/layouts/TopBar';
import Footer from './components/layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Eqa from './pages/Eqa';
import Consulting from './pages/Consulting';
import TrainingServices from './pages/TrainingServices';
import LabEquipment from './pages/LabEquipment';
import NotFound from './components/404/NotFound';
import SingleEquipment from './components/lab/SingleEquipment';
import NewsAndEvents from './pages/NewsAndEvents';
import SingleNews from './components/news-events/SingleNews';
import Quote from './components/home-page/Quote';
import ThirdParty from './pages/ThirdParty';

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
        <Route path="/lab-equipment-and-supplies" element={<LabEquipment />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/news-and-events/:id" element={<SingleNews />} />
        <Route path="/get-quote" element={<Quote />} />
        <Route path="/third-party-controls/*" element={<ThirdParty />} />
        <Route
          path="/lab-equipment-and-supplies/:id"
          element={<SingleEquipment />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
