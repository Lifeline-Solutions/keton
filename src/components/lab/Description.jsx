import PropType from 'prop-types';

const Description = ({
  equipment,
  renderSpecs,
}) => {

  const features = equipment.features && equipment.features;
  const specifications = equipment.specifications && equipment.specifications;

  return (
  <div className='px-10 pb-10'>
    <h2 className="text-md font-semibold">Description</h2>
    <h5 className="text-md font-semibold mt-6">Features</h5>
    {features && features.map((feature) => (
      <div key={feature} className='flex flex-col gap-4 list-disc mt-6'>
        <li className="text-sm">{feature}</li>
      </div>
    ))}
    <h5 className="text-md font-semibold mt-7">Specifications</h5>
    <div className='mt-4 flex flex-col gap-6'>
    {renderSpecs(specifications)}
    </div>

    <button className="bg-primaryGreen text-white rounded-lg px-4 py-2 mt-8">
      Download File
    </button>
  </div>);
};

Description.propTypes = {
  equipment: PropType.object.isRequired,
  renderSpecs: PropType.func.isRequired,
};


export default Description;
