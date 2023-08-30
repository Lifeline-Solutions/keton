import { PiTargetBold, PiHandshakeBold } from 'react-icons/pi';
import { MdOutlineGppGood } from 'react-icons/md';
import { FaThumbsUp } from 'react-icons/fa';

const values = [
  {
    id: 1,
    title: 'integrity',
    icon: <PiHandshakeBold />,
    description:
      'We steadfastly adhere to high moral principles and professional standards, knowing that our success depends on our customer’s trust.',
  },
  {
    id: 2,
    title: 'customer focus',
    icon: <PiTargetBold />,
    description:
      'We fully understand the needs of our customers and we adapt our products and services to meet them. We always strive to put satisfaction of our customers first.',
  },
  {
    id: 3,
    title: 'quality',
    icon: <MdOutlineGppGood />,
    description:
      'We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.',
  },
  {
    id: 4,
    title: 'effectiveness',
    icon: <FaThumbsUp />,
    description:
      'Our products and service solution have been developed to offer our customers the most effective tools to save time as well as help their approach to driving innovation and excellence.',
  },
];

const Values = () => {
  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-l from-primaryBlue/40 sm:py-10 py-6">
      <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-4 gap-10 sm:mt-16 mt-8 px-10">
        {values.map((value) => (
          <div key={value.id} className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-center items-center relative">
              <div className="text-2xl text-white bg-primaryBlue w-12 h-12 flex justify-center items-center rounded-full absolute -top-10">
                {value.icon}
              </div>
            </div>
            <div className="text-center sm:mt-10 mt-8 sm:mb-10 mb-4">
              <h3 className="sm:text-xl text-sm font-semibold uppercase">
                {value.title}
              </h3>
              <p className="font-light mt-6 leading-6 sm:text-sm text-xs">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
