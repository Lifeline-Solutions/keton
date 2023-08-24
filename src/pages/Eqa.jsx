import Header from '../components/eqa/Header';
import Programs from '../components/eqa/Programs';
import ThirdParty from '../components/eqa/ThirdParty';

const Eqa = () => {
  const path = window.location.pathname;

  return (
    <>
      <Header />
      {path === '/eqa/third-party-controls' ? <ThirdParty /> : <Programs />}
    </>
  );
};

export default Eqa;
