import PropTypes from 'prop-types';

const Reviews = ({ equipment, renderStars }) => {
  const reviews = equipment.reviews && equipment.reviews;

  const renderReviews = (reviews) => {
    return (
      reviews &&
      reviews.map((review) => (
        <div className="flex flex-col gap-4" key={review.id}>
          <div className="flex justify-between">
            <h5 className="text-sm font-semibold">{review.name}</h5>
            <div className="flex gap-2">
              <span className="text-sm">{review.date}</span>
              <span className="text-sm">{review.time}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-sm flex gap-1">
              {renderStars(review.rating)}
            </span>
          </div>
          <p className="text-sm">{review.comment}</p>
          <hr className="border-gray-300" />
        </div>
      ))
    );
  };

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-10 py-6">
      <div className="col-span-1">
        <h2 className="text-md font-semibold capitalize">
          Customer Feedback &gt; &gt; &gt;
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="flex flex-col gap-6 mt-10">
          {renderReviews(reviews)}
        </div>
      </div>

      <div className="col-span-1 px-20">
        <p className="text-xs">
          {reviews && reviews.length < 1
            ? 'There are no reviews yet\n Be the first to review'
            : ''}
        </p>
        <h5 className="text-md font-semibold my-4">Review {equipment.title}</h5>
        <p className="text-xs">
          Your email address will not be published. Required fields are marked *
        </p>

        <form className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm capitalize" htmlFor="name">
              your rating
              <span className="text-red-500">*</span>
            </label>
            <span className="text-sm flex gap-1">{renderStars(0)}</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm capitalize" htmlFor="name">
              your review
              <span className="text-red-500">*</span>
            </label>
            <textarea
              className="border border-gray-300 p-2"
              name="review"
              id="review"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm capitalize" htmlFor="name">
              name
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm capitalize" htmlFor="name">
              email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-2"
              type="text"
              name="email"
              id="email"
            />
          </div>

          <div className="flex gap-2 mt-4">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              className="w-6 h-6 mr-4"
            />
            <label className="text-sm capitalize" htmlFor="subscribe">
              Save my name, email in this browser for the next time I comment.
            </label>
          </div>

          <button className="bg-primaryGreen text-white rounded-lg px-4 py-2 mt-8">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  equipment: PropTypes.object.isRequired,
  renderStars: PropTypes.func.isRequired,
};

export default Reviews;
