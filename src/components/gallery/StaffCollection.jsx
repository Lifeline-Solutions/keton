import { staffImages } from '../../data/gallery';

const StaffCollection = () => {
  return (
    <div className="bg-primaryBg pb-4">
      <div className="flex flex-col justify-center items-center py-8">
        <hr className="w-60 mx-auto border-4 border-primaryGreen rounded my-1" />
        <p className="text-xl text-center font-thin my-1 capitalize">
          latest features
        </p>
        <h4 className="text-4xl text-center font-bold my-1 uppercase">
          staff collection
        </h4>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col justify-center px-10">
          <img src={staffImages[0]} alt="staff" />
          <h5 className="text-2xl font-bold mt-6 mb-2 capitalize">
            meet the staff
          </h5>
          <p className="text-sm font-normal leading-6 w-3/4">
            Our staff's commitment to delivering our suit products and services is unparalleled,
            and this is enabled by our continuous capacity building and knowledge management of the team.
            We have a sufficient number of staff members who cover all our core activities,
            including application specialists, biomedical engineers, sales executives,
            and operations and administration teams.
          </p>
          <hr className="w-full  border-1 border-primaryGreen rounded my-3" />
          <a href="/gallery/staff">
            <button className="bg-primaryGreen w-1/2 py-2 px-4 rounded uppercase text-sm font-bold hover:bg-green-300">
              View all
            </button>
          </a>
        </div>
        <div className="flex flex-col  gap-2 px-10 sm:mt-0 mt-10">
          <div className="flex justify-center items-center gap-2">
            <img
              src={staffImages[1]}
              alt="staff"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
            <img
              src={staffImages[2]}
              alt="staff"
              className="sm:w-72 w-40 sm:h-72 h-44 object-cover"
            />
          </div>
          <div className="flex gap-2">
            <img
              src={staffImages[3]}
              alt="staff"
              className="sm:w-72 w-40 sm:h-72 h-44 object-cover"
            />
            <img
              src={staffImages[4]}
              alt="staff"
              className="sm:w-72 w-40 sm:h-72 h-44 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCollection;
