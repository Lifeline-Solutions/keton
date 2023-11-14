import PropTypes from 'prop-types';
import { equipmentData } from '../../data/equipmentData';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-4 gap-6 px-4">
          {relatedEquipment.map((product) => (
            <div
              className="flex flex-col gap-4 bg-white rounded-lg sm:w-96 sm:h-88 w-72 h-full justify-center items-center px-4 py-4"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto mb-2 h-32 object-cover"
              />
              <h5 className="text-sm font-semibold">{product.title}</h5>
              <Link to={`/lab-equipment-and-supplies/${product.id}`}>
                <button className="border border-primaryGreen text-primaryGreen rounded-full py-2 px-4 mt-2 text-xs">
                  Read More &gt; &gt; &gt;
                </button>
              </Link>
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
