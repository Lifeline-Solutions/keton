import Hero from '../components/about-us/Hero';
import Founder from '../components/about-us/Founder';
import Mission from '../components/about-us/Mission';
import Summary from '../components/about-us/Summary';
import Values from '../components/about-us/Values';
import GallerySection from '../components/about-us/GallerySection';
import Reviews from '../components/about-us/Reviews';

const About = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Values />
      <Mission />
      <Founder />
      <Reviews />
      <GallerySection />
    </>
  );
};

export default About;
