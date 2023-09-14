import PropType from 'prop-types';

const Description = ({ equipment }) => {
  const { description } = equipment;

  const renderDescription = (description) => {
    return (
      <div className="flex flex-col gap-2">
        {description.map((item, index) => (
          <ul className="text-sm flex gap-10 list-disc" key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <div className="px-10 pb-10">
      {description && description.length > 0 && (
        <>
          <h2 className="text-md font-semibold">Description</h2>
          <div className="mt-4 flex flex-col gap-6">
            {renderDescription(description)}
          </div>

          <button className="bg-primaryGreen text-white rounded-lg px-4 py-2 mt-8">
            Download File
          </button>
        </>
      )}
    </div>
  );
};

Description.propTypes = {
  equipment: PropType.object.isRequired,
};

export default Description;
