const ReplyForm = () => {
  return (
    <>
    <hr className="w-full border border-black my-16" />
    <div className="flex flex-col justify-center items-start gap-5 mt-16 sm:px-32 px-0">
      <h1 className="font-bold">Leave a Reply</h1>
      <p className="text-sm">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="flex flex-col justify-start items-start gap-5 mt-5 w-full">
          <label className="text-sm" htmlFor="name">
            Name*
          </label>
          <input
            className="w-full border border-gray-300 bg-transparent px-4 py-2"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />

          <label className="text-sm" htmlFor="email">
            Email*
          </label>
          <input
            className="w-full border border-gray-300 bg-transparent px-4 py-2"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />

          <label className="text-sm" htmlFor="website">
            Website
          </label>
          <input
            className="w-full border border-gray-300 bg-transparent px-4 py-2"
            type="text"
            name="website"
            id="website"
            placeholder="Enter your website"
          />

          <label className="text-sm" htmlFor="comment">
            Comment*
          </label>
          <textarea
            className="w-full border border-gray-300 bg-transparent px-4 py-2"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Enter your comment"
          ></textarea>

          <button className="text-white bg-primaryGreen px-8 py-4 hover:bg-primaryBlueHover">
            Submit
          </button>
  
      </form>
    </div>
    </>
  );
};

export default ReplyForm;
