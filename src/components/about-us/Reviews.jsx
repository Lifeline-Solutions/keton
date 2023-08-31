import { BiSolidQuoteLeft } from 'react-icons/bi';

const reviews = [
  {
    id: 1,
    name: 'Mary Wangui',
    img: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693402826/r1_sgivhm.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Sigh R. Matel',
    img: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693402826/r2_walmbc.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 3,
    name: 'Stella W. Chea',
    img: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693402826/r3_euuae1.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
            <span className="text-primaryGreen"> creating communities</span>{' '}
            where people continually expand their capacity to create the results
            they truly desire, where new and expansive patterns of thinking are
            nurtured, where collective aspiration is set free, and where people
            are continually learning to see the whole together.
          </p>
        </div>

        <div className="col-span-1 sm:px-4">
          <div className="flex flex-col gap-8 px-12">
            {reviews.map((review) => {
              const { id, name, img, content } = review;
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
                    <img
                      src={img}
                      alt={name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex items-center py-6">
                    <p className="text-sm font-bold absolute left-8">----- {name}</p>
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
