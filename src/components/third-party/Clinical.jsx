const microcontrols = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899388/keton/equip-29_upluj7.png',
    title: 'Cal Ver LQ Blood Gas',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899388/keton/Rectangle_231_busfhu.png',
    title: 'Control Drop LQ Blood Glucose',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899388/keton/Rectangle_232_qvxi2l.png',
    title: 'Control Drop LQ Blood Glucose',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899388/keton/Rectangle_233_ia17hm.png',
    title: 'Control Drop LQ Urine Dipstick, 25ml',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899387/keton/Rectangle_238_fcaijb.png',
    title: 'Control FD Assayed Chemistry, Level 2',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899387/keton/Rectangle_239_wz8smp.png',
    title: 'Control  FD BNP',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899387/keton/Rectangle_234_wg4vgu.png',
    title: 'Control FD Cardiac Markers',
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899387/keton/Rectangle_235_u7z5hy.png',
    title: 'Control FD Glycohemoglobin A1c',
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899387/keton/Rectangle_236_pyckkg.png',
    title: 'Control FD Immunoassay',
  },
  {
    id: 10,
    image:
      'https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899386/keton/Rectangle_237_i19akm.png',
    title: 'Control LQ Homocysteine',
  },
];

const Clinical = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-6 bg-primaryBg">
      <>
        <h1 className="text-2xl capitalize mb-4 px-4">
          Clinical Chemistry & Serology Controls
        </h1>
        <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10">
          <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
            Audit Microcontrols
          </h1>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-20 mt-8 px-6">
          {microcontrols.map((microcontrol) => (
            <div
              className="col sm:col-span-1 flex flex-col"
              key={microcontrol.id}
            >
              <img
                src={microcontrol.image}
                alt="logo"
                className="w-3/4 h-3/4 rounded-lg"
                loading="lazy"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm  mt-2">{microcontrol.title}</p>
                <button className="bg-primaryGreen text-white text-sm px-4 py-2 rounded-lg mt-2">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </>

      <>
        <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10 mt-10">
          <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
            Diamex GmbH
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:h-[60vh]">
          <div className="flex flex-col gap-2 text-sm mt-4 w-3/4 leading-6 px-4">
            <p>
              The controls of the Optitrol and QConnect series are liquid
              single- or multi-analyte-controls and can be used to test the
              precision of laboratory systems. According to our ready-to-use
              concept the products may remain directly in the carrier or roboter
              of the test system. A manual refilling of the controls from the
              conventional dropper bottles into the vials of the carrier is no
              longer necessary. Relevant dead volumes therefore can be
              prevented.
            </p>
          </div>
          <div className="col sm:col-span-1 flex flex-col">
            <div className="relative sm:bg-primaryBlue">
              <div className="absolute left-20 bg-primaryBlue sm:w-[60%] sm:h-[22rem] rounded-xl sm:block"></div>
              <div className="sm:absolute">
                <img
                  src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1697899387/keton/Rectangle_227_xh7hjj.png"
                  alt="logo"
                  className="w-3/4 h-3/4 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Clinical;
