import { Key, useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";



type ImageModalProp = {
  item: any;
};

const ImageModal: React.FC<ImageModalProp> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  console.log("this is ", item[0].image);

  const handleImageClick = (index: number) => {
    //  alert("Image loaded")
    setIsModalOpen(true);
    setPhotoIndex(index);
  };
  return (
    <div>
      <div className="py-5   justify-center md:grid md:grid-cols-4  grid grid-cols-2 bg-gray-900 md:gap-3 gap-2 p-2 md:p-4 ">
        {item.map((event: any, index: number) => {
          return (
            <Image
              key={index}
              alt=""
              src={event.image}
              className="cursor-pointer h-[302px] w-[509px] object-cover    "
              onClick={() => handleImageClick(index)}
            />
          );
        })}
      </div>

      {isModalOpen && (
        <Lightbox
          mainSrc={item[photoIndex % item.length].image.src}
          nextSrc={item[(photoIndex + 1) % item.length].image.src}
          prevSrc={item[(photoIndex + item.length - 1) % item.length].image.src}
          onCloseRequest={() => setIsModalOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + item.length - 1) % item.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % item.length)
          }
          imageTitle={`Image ${photoIndex + 1}`}
          imageCaption={`This is .....................`}
        />
      )}
    </div>
  );
};

export default ImageModal;
