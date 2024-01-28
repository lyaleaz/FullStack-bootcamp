import React, { useState } from "react";

export default function Images(props) {
  const [dataImages, setDataImages] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });

  const imagePrevious = () => {
    if (dataImages.currentImg > 0) {
      setDataImages((prevDataImages) => ({
        ...prevDataImages,
        currentImg: prevDataImages.currentImg - 1,
      }));
    }
  };

  const imageNext = () => {
    if (dataImages.currentImg < dataImages.images.length - 1) {
      setDataImages((prevDataImages) => ({
        ...prevDataImages,
        currentImg: prevDataImages.currentImg + 1,
      }));
    }
  };

  return (
    <div>
      <button className="back" onClick={imagePrevious}>
        Previous
      </button>
      <img src={dataImages.images[dataImages.currentImg]} alt="gallery" />
      <button className="forward" onClick={imageNext}>
        Next
      </button>
    </div>
  );
}
