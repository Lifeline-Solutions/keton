import Header from '../components/third-party/Header';
import Home from '../components/third-party/Home';
import Haematology from '../components/third-party/Haematology';
import Coagulation from '../components/third-party/Coagulation';
import Clinical from '../components/third-party/Clinical';
import Bacterial from '../components/third-party/Bacterial';

const ThirdParty = () => {
  const path = window.location.pathname;
  console.log(path);

  const renderComponent = () => {
    if (path === '/third-party-controls/haematology-controls') {
      return <Haematology />;
    } else if (path === '/third-party-controls/bacterial-control') {
      return <Bacterial />;
    } else if (
      path === '/third-party-controls/clinical-chemistry-and-serology-controls'
    ) {
      return <Clinical />;
    } else if (path === '/third-party-controls/coagulation-controls') {
      return <Coagulation />;
    } else if (path === '/third-party-controls') {
      return <Home />;
    }
  };

  return (
    <>
      <Header />
      {renderComponent()}
    </>
  );
};

export default ThirdParty;
