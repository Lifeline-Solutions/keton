import {
  awardsImages,
  staffImages,
  eventsImages,
  trainingImages,
} from '../../data/gallery';

const SingleCollection = () => {
  const path = window.location.pathname;
  const page = path.split('/')[2];

  let images = [];

  if (page === 'staff') {
    images = staffImages;
  } else if (page === 'training') {
    images = trainingImages;
  } else if (page === 'awards') {
    images = awardsImages;
  } else if (page === 'events') {
    images = eventsImages;
  }

  return (
    <div className="bg-primaryBg pb-4">
      <div className="flex flex-col justify-center items-center py-8 pt-44">
        <hr className="w-60 mx-auto border-4 border-primaryGreen rounded my-1" />
        <p className="text-xl text-center font-thin my-1 capitalize">
          latest features
        </p>
        <h4 className="text-4xl text-center font-bold my-1 uppercase">
          {page} collection
        </h4>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 px-10">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={page}
              className="w-full sm:h-72 h-44 object-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleCollection;
