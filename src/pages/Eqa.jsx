import Header from '../components/eqa/Header';
import Programs from '../components/eqa/Programs';
import Process from '../components/eqa/Process';
import InquiryForm from '../components/eqa/InquiryForm';

const Eqa = () => {
  const path = window.location.pathname;
  const renderComponent = () => {
    if (path === '/eqa/progrmas') {
      return <Programs />;
    } else if (path === '/eqa/process') {
      return <Process />;
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
