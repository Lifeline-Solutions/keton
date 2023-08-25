import Header from '../components/training/Header';
import IsoTraining from '../components/training/IsoTraining';
import BioMedicineCourses from '../components/training/BioMedicine';

const TrainingServices = () => {
  const path = window.location.pathname;

  return (
    <>
      <Header />
      {path === '/training-services/iso-training' ? (
        <IsoTraining />
      ) : (
        <BioMedicineCourses />
      )}
    </>
  );
};

export default TrainingServices;
