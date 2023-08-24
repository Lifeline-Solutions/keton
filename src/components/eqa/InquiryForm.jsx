const InquiryForm = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-10 px-4 ">
      <h2 className="capitalize sm:text-2xl font-bold mt-2">
        Inquire About Our EQA
      </h2>
    <form className="flex flex-col gap-4 mt-10 w-3/4">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="border border-secondaryBlue rounded p-2 bg-transparent"
      />
      <label htmlFor="phone_number">Phone Number</label>
      <input
        type="number"
        name="phone_number"
        id="phone_number"
        className="border border-secondaryBlue rounded p-2 bg-transparent"
      />
      <label htmlFor="organisation">Organisation</label>
      <input
        type="organisation"
        name="organisation"
        id="organisation"
        className="border border-secondaryBlue bg-transparent rounded p-2"
      />
      <label htmlFor="program">
        Program Interested in
        <span className="text-red-500">*</span>
        </label>
      <input
        type="program"
        name="program"
        id="program"
        className="border border-secondaryBlue bg-transparent rounded p-2"
      />
      <label htmlFor="region">Region/City/Town</label>
      <input
        type="region"
        name="region"
        id="region"
        className="border border-secondaryBlue bg-transparent rounded p-2"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primaryBlue text-white font-bold uppercase py-2 px-4 rounded hover:bg-primaryGreen w-1/2 shadow-lg"
        >
          submit
        </button>
      </div>
    </form>
    </div>
  )
}

export default InquiryForm
