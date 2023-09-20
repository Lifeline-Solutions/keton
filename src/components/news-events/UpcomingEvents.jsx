import blogs from '../../data/blogContent';

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col justify-center items-start bg-primaryBg pt-48 pb-10 px-16">
      <h1 className="font-bold">Upcoming Events</h1>
      <div className="flex justify-center items-start gap-2 mt-10">
        <div className="bg-primaryBlue w-1 sm:h-16 h-32"></div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="sm:text-2xl text-lg font-bold uppercase">
            PROVIDING YOU WITH THE LATEST NEWS & EVENTS UPDATES
          </h1>
          <p className="text-sm font-light">
            Get the latest news and events feature all round by just a click.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-16">
        <hr className="w-full border border-black" />
        {blogs.map((item) => (
          <>
            <div
              key={item.id}
              className="flex sm:flex-row flex-col justify-center items-center gap-12"
            >
              <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg px-8 py-4 gap-2">
                <h3 className="text-sm capitalize">{item.month}</h3>
                <p className="text-4xl font-bold">{item.day}</p>
              </div>
              <img
                className="sm:w-1/3 sm:h-1/3 object-cover rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col gap-4 justify-center items-start">
                <h3 className="text-xl font-semibold capitalize">
                  {item.title}
                </h3>
                {
                  item.content && (
                    <p className={`text-sm font-light ${item.content_hidden ? 'text-primaryBg user-select-none text-opacity-0' : 'text-black'
                    }`}>
                      {item.content.substring(0, 200)}...
                    </p>
                  )
                }
                <a
                  href={`/news-and-events/${item.id}`}
                  className="text-primary text-sm font-semibold mt-6 text-primaryBlue px-4 py-2 rounded-lg hover:text-white"
                >
                  View More &gt; &gt; &gt;
                </a>
              </div>
            </div>
            <hr className="w-full border border-black" />
          </>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
