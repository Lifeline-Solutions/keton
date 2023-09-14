import PropTypes from 'prop-types';
import { equipmentData } from "../../data/equipmentData";

const RelatedProducts = ({ equipment }) => {

  const relatedEquipment = equipmentData.flatMap((category) =>
    category.products.filter(
      (product) =>
        product.category === equipment.category && product.id !== equipment.id
    )
  );

  return (
    <div className="h-full py-10 bg-primaryBg text-black flex px-4 items-center">
      {relatedEquipment.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 px-4">
          {relatedEquipment.map((product) => (
            <div
              className="flex flex-col gap-4 bg-white rounded-lg w-72 h-72 justify-center items-center px-4 py-4"
              key={product.id}
            >
              <img
                className="w-full h-40 object-cover"
                src={product.image}
                alt={product.title}
              />
              <h5 className="text-sm font-semibold">{product.title}</h5>
              <a href={`/lab-equipment-and-supplies/${product.id}`}>
                <button className="border border-primaryGreen text-primaryGreen rounded-full py-2 px-4 mt-2 text-xs">
                  Read More &gt; &gt; &gt;
                </button>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <h5 className="text-sm font-semibold">No related products</h5>
      )}
    </div>
  );
};

RelatedProducts.propTypes = {
  equipment: PropTypes.object.isRequired,
};

export default RelatedProducts;
