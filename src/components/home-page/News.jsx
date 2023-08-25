const news = [
  {
    id: 1,
    image: '/images/news-1.png',
    title: 'Keton Consulting Ltd-ESfEQA Meeting Heidelberg-Germany',
    content:
      'Keton Consulting continues partnership with ESfEQA to provide quality External Assurance Services in the region Kenya, Uganda & Tanzania. We provide reliable and cost effective programs with great report content.',
  },
  {
    id: 2,
    image: '/images/news-2.png',
    title: '2022 – TOP 40 UNDER 40 AWARDS CEREMONY – KE.',
    content:
      'When he was a boy, Anthony dissented with his mother on the question of his future career. The mother finally won the battle…” starts the article on page 18 of Business Daily. The story seeks to celebrate the top 40...',
  },
  {
    id: 3,
    image: '/images/news-3.png',
    title: 'TRAINING INVITATION TO ISO 15189:2012 IMPLEMENTATION TRAINING',
    content:
      'Keton Consulting continues partnership with ESfEQA to provide quality External Assurance Services in the region Kenya, Uganda & Tanzania. We provide reliable and cost effective programs with great report content.',
  },
];

const News = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg pt-20">
      <h1 className="uppercase sm:text-2xl text-xl font-bold mb-10 sm:ml-0 ml-6">
        Providing you with the latest News & Events Updates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-10">
        {news.map((item) => (
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
              <p className="text-gray-500 mt-6 text-sm">{item.content}</p>
              <button className="text-primary text-sm font-semibold mt-6 border border-primaryBlue px-4 py-2 rounded-lg">
                Read More &gt; &gt; &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
