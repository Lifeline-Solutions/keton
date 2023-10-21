const Coagulation = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-6 bg-primaryBg">
      <>
        <h1 className="text-2xl capitalize mb-4 px-4">Coagulation control</h1>
        <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10">
          <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
            Prothrombin Time
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-sm mt-4 w-3/4 leading-6 px-4">
          <h1 className="text-md font-bold text-black capitalize">
            Intended Use
          </h1>
          <p>
            (For In Vitro Diagnostic Use Only) Dia-Cont I-II kit is intended for
            normal and abnormal quality control for the following haemostasis
            screening tests: prothrombin time (PT), activated partial
            thromboplastin time (APTT), fibrinogen and thrombin time (TT). It
            does not provide as control for accuracy!
          </p>
          <br />
          <h1 className="text-md font-bold text-black capitalize">
            Summary & background
          </h1>
          <p>
            The performance of daily quality control (QC) of haemostasis
            screening tests is highly recommended for security reasons. The
            industrial QC materials contain preservatives, stabilizers for
            lyophilisation, which distort their original biological nature. For
            this reason they serve to check the repeatability and
            reproducibility of the measuring system. To check the accuracy of
            the reported result join and perform external quality assurance
            program in regular intervals.
          </p>
        </div>
      </>
      <>
        <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10 mt-10">
          <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
            Activated Partial Thromboplastin Clotting Time
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-sm mt-4 w-3/4 leading-6 px-4">
          <h1 className="text-md font-bold text-black capitalize">
            Intended Use
          </h1>
          <p>
            (For In Vitro Diagnostic Use Only) Dia-Cont I-II kit is intended for
            normal and abnormal quality control for the following haemostasis
            screening tests: prothrombin time (PT), activated partial
            thromboplastin time (APTT), fibrinogen and thrombin time (TT). It
            does not provide as control for accuracy!
          </p>
          <br />
          <h1 className="text-md font-bold text-black capitalize">
            Summary & background
          </h1>
          <p>
            The performance of daily quality control (QC) of haemostasis
            screening tests is highly recommended for security reasons. The
            industrial QC materials contain preservatives, stabilizers for
            lyophilisation, which distort their original biological nature. For
            this reason they serve to check the repeatability and
            reproducibility of the measuring system. To check the accuracy of
            the reported result join and perform external quality assurance
            program in regular intervals.
          </p>
        </div>
      </>
    </div>
  );
};

export default Coagulation;
