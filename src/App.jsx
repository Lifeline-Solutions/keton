import TopBar from './components/layouts/TopBar';
import Footer from './components/layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Consulting from './pages/Consulting';
import LabEquipment from './pages/LabEquipment';
import NotFound from './components/404/NotFound';
import SingleEquipment from './components/lab/SingleEquipment';
import NewsAndEvents from './pages/NewsAndEvents';
import SingleNews from './components/news-events/SingleNews';
import Quote from './components/home-page/Quote';
import Gallery from './pages/Gallery';
import SingleCollection from './components/gallery/SingleCollection';
import Programs from './components/eqa/Programs';
import Process from './components/eqa/Process';
import Resources from './components/eqa/Resources';
import IsoTraining from './components/training/IsoTraining';
import BioMedicine from './components/training/BioMedicine';
import ThirdParty from './components/third-party/Home';
import Haematology from './components/third-party/Haematology';
import Coagulation from './components/third-party/Coagulation';
import Clinical from './components/third-party/Clinical';
import Bacterial from './components/third-party/Bacterial';

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/eqa/programs" element={<Programs />} />
        <Route path="/eqa/process" element={<Process />} />
        <Route path="/eqa/rca-resources" element={<Resources />} />
        <Route
          path="/training-services/iso-training"
          element={<IsoTraining />}
        />
        <Route
          path="/training-services/bio-medicine-courses"
          element={<BioMedicine />}
        />
        <Route path="/lab-equipment-and-supplies" element={<LabEquipment />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/news-and-events/:id" element={<SingleNews />} />
        <Route path="/get-quote" element={<Quote />} />
        <Route path="/third-party-controls" element={<ThirdParty />} />
        <Route
          path="/third-party-controls/haematology-controls"
          element={<Haematology />}
        />
        <Route
          path="/third-party-controls/coagulation-controls"
          element={<Coagulation />}
        />
        <Route
          path="/third-party-controls/clinical-chemistry-and-serology-controls"
          element={<Clinical />}
        />
        <Route
          path="/third-party-controls/bacterial-control"
          element={<Bacterial />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/*" element={<SingleCollection />} />
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
