import { useEffect, useState } from 'react';
import { MdGroup } from 'react-icons/md';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { GiMicroscope } from 'react-icons/gi';

const statistics = [
  {
    id: 1,
    icon: <MdGroup />,
    title: 'Partners & Clients',
    number: 200,
  },
  {
    id: 2,
    icon: <AiOutlineFileProtect />,
    title: 'Training Programs',
    number: 20,
  },
  {
    id: 3,
    icon: <GiMicroscope />,
    title: 'Lab Equipments',
    number: 200,
  },
];

const StatisticsCard = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNumbers((prevNumbers) =>
        prevNumbers.map((statistic) => ({
          ...statistic,
          currentNumber:
            statistic.currentNumber + Math.ceil((statistic.number - statistic.currentNumber) / 10),
        }))
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setAnimatedNumbers(statistics.map((statistic) => ({ ...statistic, currentNumber: 0 })));
  }, []);

  return (
    <div className="flex justify-center sm:gap-28 bg-white shadow sm:p-8 sm:w-8/12 w-8/12 rounded-xl absolute sm:-top-20 -top-10">
      {animatedNumbers.map((statistic) => (
        <div className="text-center flex flex-col justify-center items-center" key={statistic.id}>
          <div className="sm:text-3xl text:md text-primaryGreen flex sm:flex-row flex-col sm:gap-4">
            <span>{statistic.icon}</span>
            <span className='text-black font-bold'>{statistic.currentNumber}+</span>
          </div>
          <h3 className="sm:text-lg text-[10px] font-semibold mt-2">{statistic.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCard;
