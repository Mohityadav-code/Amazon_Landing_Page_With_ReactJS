import React from 'react';
import img1 from './public/nav1.jpg';
import img2 from './public/nav2.jpg';
import img3 from './public/nav3.jpg';
import img4 from './public/nav4.jpg';
import img5 from './public/nav5.jpg';
import img6 from './public/nav6.jpg';

const ImageSlider = () => {
  return (
    <div className="bg">
      {[img1, img2, img3, img4, img5, img6].map((img, index) => (
        <div
          key={index}
          className="relative hidden"
          style={{ position: 'relative', display: 'none' }}
        >
          <img className="imgg" src={img} alt=''/>
          <div
            className="h-900 absolute bottom-0 left-0 right-0 h-1/2 bg-inherit"
            style={{
              height: '900px',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'inherit',
              backgroundImage: 'linear-gradient(to bottom, transparent 0%, #cdcdcd 100%)',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
