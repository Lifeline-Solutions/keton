import blogs from '../../data/blogContent';
import { useParams } from 'react-router-dom';
import ReplyForm from './ReplyForm';
import { Link } from 'react-router-dom';

const SingleNews = () => {
  const { id } = useParams();

  const news = blogs.find((item) => item.id === parseInt(id));

  return (
    <div className="pt-48 pb-10 px-16  bg-primaryBg">
      <h1 className="font-bold">Upcoming Events</h1>
      <div className="flex  gap-2 mt-4 mb-16">
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
      <hr className="w-full border border-gray-500" />
      {/* <Link to='/news-and-events' className='text-primary text-sm font-semibold mt-6 border border-primaryBlue px-4 py-2 rounded-lg hover:bg-primaryBlue hover:text-white'>
        &lt; &lt; &lt; Back to News & Events
      </Link> */}
      <div className="flex sm:flex-row flex-col  items-start gap-12 mt-8">
        <div className="bg-white flex flex-col justify-center items-center shadow-md px-8 py-4 gap-2">
          <h3 className="text-sm capitalize">{news.month}</h3>
          <p className="text-4xl font-bold">{news.day}</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2 mt-2">
          <img
            className="w-full h-full rounded-lg"
            src={news.image}
            alt={news.title}
          />
          <h1 className="sm:text-2xl text-lg font-medium uppercase mt-4">
            {news.title}
          </h1>
          {news.content &&
            !news.content_hidden &&
            news.content.split('\n').map((item, index) => (
              <p key={index} className="mt-6 text-sm">
                {item}
              </p>
            ))}
          {news.link && (
            <Link
              to={news.link}
              className="text-primary text-sm font-semibold mt-6 text-primaryBlue px-4 py-2 rounded-lg hover:text-white"
            >
              {news.link}
            </Link>
          )}
        </div>
      </div>
      {news.images && (
        <div className="flex flex-col justify-center items-center gap-10 mt-16">
          <hr className="w-full border border-black" />
          <h1 className="font-bold">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-10">
            {news.images.map((item, index) => (
              <div key={index} className="p-2">
                <div className="relative">
                  <img
                    className="sm:w-96 sm:h-96 w-48 h-48 object-cover rounded-lg"
                    src={item}
                    alt={news.title}
                  />
                  <div className="absolute inset-0.5 bg-black opacity-10 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ReplyForm />
    </div>
  );
};

export default SingleNews;
