import blogs from "../../data/blogContent";

const News = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg pt-20">
      <h1 className="uppercase sm:text-2xl text-xl font-bold mb-10 sm:ml-0 ml-6">
        Providing you with the latest News & Events Updates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-10">
        {blogs.slice(0, 3).map((item) => (
          <div key={item.id} className="p-2">
            <div className="relative">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0.5 bg-black opacity-10 rounded-xl"></div>
            </div>
            <div className="text-left mt-4 mb-10">
              <h3 className="text-xl font-semibold capitalize">{item.title}</h3>
              <p className="text-gray-500 mt-6 text-sm">
               {item.content && item.content.slice(0, 100)}...
              </p>
              <a href={`/news-and-events/${item.id}`}>
                <button className="text-primary text-sm font-semibold mt-6 border border-primaryBlue px-4 py-2 rounded-lg">
                  Read More &gt; &gt; &gt;
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 flex justify-center items-center">
        <a
          href="/news-and-events"
          className="text-primary text-sm font-semibold mt-6 border border-primaryBlue px-4 py-2 rounded-lg hover:bg-primaryBlue hover:text-white"
        >
          View All News &gt; &gt; &gt;
        </a>
      </div>
    </div>
  );
};

export default News;
