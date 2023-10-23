const MoreStaff = () => {
  return (
    <div className="bg-primaryBg pb-4">
      <div className="flex flex-col justify-center items-center py-8">
        <hr className="w-60 mx-auto border-4 border-primaryGreen rounded my-1" />
        <p className="text-xl text-center font-thin my-1 capitalize">
          latest features
        </p>
        <h4 className="text-4xl text-center font-bold my-1 uppercase">
          Staff collection
        </h4>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 px-10">
        <img
          src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327250/keton/Keton_Consulting61_sv465q.jpg"
          alt="staff"
          className="w-full h-72 object-cover"
        />
        <img
          src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327519/keton/Keton_Consulting9_q8bfbu.jpg"
          alt="staff"
          className="w-full h-72 object-cover"
        />
        <img
          src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1698082558/Rectangle_245_leqejd.png"
          alt="staff"
          className="w-full h-72 object-cover"
        />
        <img
          src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327539/keton/Keton_Consulting25_1_xepenq.jpg"
          alt="staff"
          className="w-full h-72 object-cover"
        />
        <img
          src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327519/keton/Keton_Consulting9_q8bfbu.jpg"
          alt="staff"
          className="w-full h-72 object-cover"
        />
        <img
          src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1698082558/Rectangle_245_leqejd.png"
          alt="staff"
          className="w-full h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default MoreStaff;
