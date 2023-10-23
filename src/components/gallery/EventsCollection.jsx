const EventsCollection = () => {
  return (
    <div className="bg-primaryBg pb-4">
      <div className="flex flex-col justify-center items-center py-8">
        <hr className="w-60 mx-auto border-4 border-primaryGreen rounded my-1" />
        <p className="text-xl text-center font-thin my-1 capitalize">latest features</p>
        <h4 className="text-4xl text-center font-bold my-1 uppercase">Events collection</h4>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col justify-center px-10">
          <img
            src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327250/keton/Keton_Consulting61_sv465q.jpg"
            alt="Events"
            className=""
          />
          <h5 className="text-2xl font-bold mt-6 mb-2 capitalize">meet the Events</h5>
          <p className="text-sm font-normal leading-6 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
          </p>
          <hr className="w-full  border-1 border-primaryGreen rounded my-3" />
          <button className="bg-primaryGreen w-1/2 py-2 px-4 rounded uppercase text-sm font-bold">
            View all
          </button>
        </div>
        <div className="flex flex-col  gap-2 px-10">
          <div className="flex justify-center items-center gap-2">
            <img src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1698082558/Rectangle_245_leqejd.png" alt="Events" className="w-3/4 h-72 object-cover" />
            <img src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327519/keton/Keton_Consulting9_q8bfbu.jpg" alt="Events" className="w-3/4 h-72 object-cover" />
          </div>
          <div className="flex gap-2">
          <img src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327519/keton/Keton_Consulting9_q8bfbu.jpg" alt="Events" className="w-3/4 h-72 object-cover" />
          <img src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327539/keton/Keton_Consulting25_1_xepenq.jpg" alt="Events" className="w-3/4 h-72 object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsCollection
