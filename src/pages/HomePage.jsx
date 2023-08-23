import TopBar from '../layouts/TopBar';
import Header from '../layouts/Header';
import Services from '../layouts/Services';
import Products from '../layouts/Products';
import News from '../layouts/News';
import ClientPartners from '../layouts/ClientPartners';
import Footer from '../layouts/Footer';

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Services />
      <Products />
      <News />
      <ClientPartners />
      <Footer />
    </>
  );
};

export default HomePage;
