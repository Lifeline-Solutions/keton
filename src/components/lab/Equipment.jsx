import { equipmentData } from '../../data/equipmentData';

const Equipment = () => {
  return (
    <div className="py-10 md:px-40 px-8 bg-primaryBg">
      {equipmentData.map((category) => (
        <div key={category.id} className="mb-6 relative bg-white rounded-lg">
          <div className="bg-primaryBlue py-4 px-6 rounded-lg capitalize font-medium">
            {category.title}
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-4 pt-28">
            {category.products.map((product) => (
              <div key={product.id} className="p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto mb-2 h-32 object-cover"
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="font-semibold mt-4"> {product.title} </p>
                  <a href={`lab-equipment-and-supplies/${product.id}`}>
                    <button className="border border-primaryGreen text-primaryGreen rounded-full py-2 px-6 mt-4 text-xs">
                      Read More &gt; &gt; &gt;
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Equipment;
