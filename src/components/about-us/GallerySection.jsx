const imagesArrayOne = [
   {
      id: 1,
      src: "https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327564/keton/Lab_Tecs48_etcgk9.jpg",
   },
   {
      id: 2,
      src: "https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327545/keton/Keton_Consulting2_1_wn06dt.jpg",
   },

   {
      id: 3,
      src: "https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327536/keton/Keton_Consulting38_1_akqg69.jpg",
   },
   {
    id: 4,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327519/keton/Keton_Consulting9_q8bfbu.jpg'
   }
];

const imagesArrayTwo = [
  {
    id: 5,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327510/keton/Keton_Consulting20_xcaoi2.jpg'
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327233/keton/Keton_Consulting62_nadvpc.jpg'
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327145/keton/Keton25_-_Copy_pwb1sk.jpg'
  },
]

const imagesArrayThree = [
  {
    id: 8,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327143/keton/Lab_Tecs1_jv22x0.jpg'
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327059/keton/Lab_Tecs38_fdah4u.jpg'
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693326925/keton/Lab_Tecs53_tsqzbu.jpg'
  },
  {
    id: 11,
    src: 'https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327097/keton/Lab_Tecs29_fqdytn.jpg'
  },
]


const GallerySection = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-6">
      <div className="text-center sm:mt-10">
        <h2 className="capitalize sm:text-3xl font-bold mt-2">Gallery</h2>
        <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
      </div>

      <div className="mt-10 flex flex-col gap-2 sm:px-3 px-4">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {imagesArrayOne.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="col-span-1">
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {imagesArrayTwo.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="col-span-1">
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {imagesArrayThree.map((image) => {
            const { id, src } = image;
            return (
              <div key={id} className="col-span-1">
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
