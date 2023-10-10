import Header from '../components/eqa/Header';
import Programs from '../components/eqa/Programs';
import Process from '../components/eqa/Process';
import InquiryForm from '../components/eqa/InquiryForm';
import Resources from '../components/eqa/Resources';

const Eqa = () => {
  const path = window.location.pathname;
  const renderComponent = () => {
    if (path === '/eqa/programs') {
      return <Programs />;
    } else if (path === '/eqa/process') {
      return <Process />;
    } else if (path === '/eqa/rca-resources') {
      return <Resources />;
    } else {
      return <Programs />;
    }
  };

  return (
    <>
      <Header />
      {renderComponent()}
      <InquiryForm />
    </>
  );
};

export default Eqa;
