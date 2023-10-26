import Header from '../components/gallery/Header';
import StaffCollection from '../components/gallery/StaffCollection';
import TrainingCollection from '../components/gallery/TrainingCollection';
import AwardsCollection from '../components/gallery/AwardsCollection';
import EventsCollection from '../components/gallery/EventsCollection';

const Gallery = () => {
  return (
    <>
      <Header />
      <StaffCollection />
      <TrainingCollection />
      <AwardsCollection />
      <EventsCollection />
    </>
  );
};

export default Gallery;
