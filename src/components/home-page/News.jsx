import blogs from '../../data/blogContent';
import { Link } from 'react-router-dom';

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
                className="w-full h-[300px] object-cover rounded-lg"
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
              <Link to={`/news-and-events/${item.id}`}>
                <button className="text-white text-sm font-semibold mt-6 border bg-primaryGreen px-4 py-2 rounded-lg">
                  Read More &gt; &gt; &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 flex justify-center items-center">
        <Link
          to="/news-and-events"
          className="text-white text-sm font-semibold mt-6  bg-primaryGreen px-4 py-2 rounded-lg"
        >
          View All News &gt; &gt; &gt;
        </Link>
      </div>
    </div>
  );
};

export default News;
