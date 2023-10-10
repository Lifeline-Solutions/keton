import { BiSolidQuoteLeft } from 'react-icons/bi';

const reviews = [
  {
    id: 1,
    name: ' Leonida Were( Laboratory Manager Kisumu Specialilty)',
    content:
      'We pride ourselves in working with Keton for over 5 years now especially in provision of third parties controls for hermatology, EQA services, Coaguluation Equipments and other lab supplies.They are reliable, Consistence and provide timely services.',
  },
  {
    id: 2,
    name: 'Dr. Martin Bundi ( Director research and capacity development KEMRI)',
    content:
      'This is a company that is home grown and we have the right competences that we don’t need to engage other consultancies out there from over seas.We believe we have a bright and very fruitful engagement with Keton.',
  },
  {
    id: 3,
    name: ' Dr. Jamilla Rajab (UON Department of Pathology)',
    content:
      'We like that Keton is improving laboratory management system for rapid realiable laboratory results for better patient care and management.',
  },
];

const Reviews = () => {
  return (
    <div className="py-24 h-full bg-secondaryBlue text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 px-8 flex flex-col justify-center">
          <h2 className="uppercase sm:text-3xl text-xl font-bold">
            BRINgING VALUE ACROSS DIFFERENT BRANCHES OF BRANDS
          </h2>
          <p className="font-light text-sm leading-6 sm:w-9/12 w-11/12 mt-5">
            Keton Consulting Limited is a multiagency consulting and service
            firm grounded on
            <span className="text-primaryGreen">
              {' '}
              creating communities
            </span>{' '}
            where people continually expand their capacity to create the results
            they truly desire, where new and expansive patterns of thinking are
            nurtured, where collective aspiration is set free, and where people
            are continually learning to see the whole together.
          </p>
        </div>

        <div className="col-span-1 sm:px-4">
          <div className="flex flex-col gap-8 px-12">
            {reviews.map((review) => {
              const { id, name, content } = review;
              return (
                <div
                  key={id}
                  className="col-span-1 flex flex-col items-center  px-6 py-4 bg-white text-black rounded-lg relative"
                >
                  <BiSolidQuoteLeft className="text-xl absolute left-8" />
                  <div className="flex justify-center items-center gap-6">
                    <p className="text-left text-xs leading-6 pt-6">
                      {content}
                    </p>
                  </div>
                  <div className="flex items-center py-6">
                    <p className="text-sm font-bold absolute left-8">
                      ----- {name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
