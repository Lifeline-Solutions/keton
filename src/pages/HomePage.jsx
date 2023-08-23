import Header from "../components/home-page/Header";
import Services from "../components/home-page/Services";
import Products from "../components/home-page/Products";
import News from "../components/home-page/News";
import ClientPartners from "../components/home-page/ClientPartners";

const HomePage = () => {
  return (
    <>
      <Header />
      <Services />
      <Products />
      <News />
      <ClientPartners />
    </>
  );
};

export default HomePage;
