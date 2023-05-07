import React, { useState, useEffect } from 'react';

const ImageBoxes = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="afterNav container flex justify-around relative bottom-[300px] w-full h-full">
      {images.map((image, index) => {
        if (index % 2 === 0) {
          return (
            <div key={image.id} className="p-4 bigProdBox justify-around flex-col flex bg-[#FFFFFF] w-[350px] h-[420px]">
              <div className="text font-bold text-2xl">Up to 60% off | Styles for women</div>
              <div className="TwoProd pt-4 w-full h-full flex justify-between">
                <div className="prodtwo bg-yellow-400 w-[150px] h-[120px] flex items-center justify-center">
                  <img src={images[index].thumbnailUrl} alt={images[index].title} />
                </div>
                <div className="prodtwo bg-yellow-400 w-[150px] h-[120px] flex items-center justify-center">
                  <img src={images[index + 1].thumbnailUrl} alt={images[index + 1].title} />
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ImageBoxes;
