import blogs from '../../data/blogContent'
import { useParams } from 'react-router-dom'

const SingleNews = () => {
  const { id } = useParams()

  const news = blogs.find((item) => item.id === parseInt(id))

  return (
    <div className='pt-48 pb-10 px-16  bg-primaryBg'>
      <a href='/news-and-events' className='text-primary text-sm font-semibold mt-6 border border-primaryBlue px-4 py-2 rounded-lg hover:bg-primaryBlue hover:text-white'>
        &lt; &lt; &lt; Back to News & Events
      </a>
      <div className="flex sm:flex-row flex-col  items-start gap-12 mt-8">
        <img className="w-full h-96 object-cover rounded-lg" src={news.image} alt={news.title} />
        <div className="flex flex-col justify-center items-start gap-2 mt-2">
          <div className='bg-white flex flex-col justify-center items-center shadow-md rounded-lg px-8 py-4 gap-2'>
            <h3 className="text-sm capitalize">{news.month}</h3>
            <p className="text-4xl font-bold">{news.day}</p>
          </div>
          <h1 className="sm:text-2xl text-lg font-medium uppercase mt-4">
            {news.title}
          </h1>
          {
            news.content && news.content.split('\n').map((item, index) => (
              <p key={index} className="mt-6 text-sm">
                {item}
              </p>
            ))
          }
          {
            news.link && (
              <a href={news.link} className="text-primary text-sm font-semibold mt-6 text-primaryBlue px-4 py-2 rounded-lg hover:text-white">
                {news.link}
              </a>
            )
          }
        </div>
      </div>
      {
        news.images && (
          <div className="flex flex-col justify-center items-center gap-10 mt-16">
            <hr className="w-full border border-black" />
            <h1 className="font-bold">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-10">
              {
                news.images.map((item, index) => (
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
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SingleNews
