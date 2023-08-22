import { BsCart } from 'react-icons/bs'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'

const cards = [
  {
    id: 1,
    icon: <BsCart/>,
    title: 'Kenton Products',
    description: 'We offer a wide range of products ranging from clinical lab equipment among others'
  },
  {
    id: 2,
    icon: <MdOutlineMedicalServices />,
    title: 'Kenton Services',
    description: "Kenton is renowned for offering exceptional services to it's various clients globally"
  },
  {
    id: 3,
    icon: <HiUserGroup />,
    title: 'Kenton Training',
    description: 'Keton Consulting is the leading agency that offers different ISO/IEC trainings in Kenya.'
  }
]



const Services = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-10">

      <div className="text-center">
        <h1 className="capitalize sm:text-md text-base font-light">our services</h1>
        <h2 className="capitalize sm:text-3xl font-bold mt-2">what we do</h2>
        <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-10 mt-16 px-10">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-center items-center relative">
              <div className="text-2xl text-white bg-primaryBlue w-12 h-12 flex justify-center items-center rounded-full absolute -top-10">{card.icon}</div>
            </div>
            <div className="text-center sm:mt-24 mt-10 mb-10">
              <h3 className="text-xl font-semibold capitalize">{card.title}</h3>
              <p className="text-gray-500 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Services
