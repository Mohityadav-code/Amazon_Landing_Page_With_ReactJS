import React from 'react';
import Corousal from './ImageSlider';
import img1 from "./public/nav1.jpg"
import img2 from "./public/nav2.jpg"
import img3 from "./public/nav3.jpg"
import img4 from "./public/nav4.jpg"
import img5 from "./public/nav5.jpg"
import img6 from "./public/nav6.jpg"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  "./Home.css"
import NavBar from './NavBar';
import ImageSlider from './ImageSlider';

function Home(props) {
  const images = [img1, img2, img3];
  return (
    <div className=" ">
      <NavBar />


      <Carousel
      showArrows={true}
      autoPlay={true}
      interval={1500}
      infiniteLoop={true}
      showThumbs={false}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}
    >
      {images.map((img, index) => (
        <div key={index} className="relative">
          <img src={img} alt={`Sample Resume ${index + 1}`} />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #cdcdcd 100%)',
            }}
          />
        </div>
      ))}
    </Carousel>
   

  <ImageSlider/>
   <div className="afterNav ">
   <div className="container flex justify-around  relative bottom-[300px] w-full h-full">
        <div className="p-4 bigProdBox justify-around  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
            <div className="text font-bold text-2xl">Up to 60% off | Styles for women</div>
            <div className="TwoProd pt-4 w-full h-full flex justify-between    ">
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
            </div>
            <div className="TwoProd w-full h-full  flex justify-between  ">
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
            </div>
        </div>
        <div className=" p-4 bigProdBox justify-between  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
            <div className="text font-bold text-2xl">Up to 60% off | Styles for women</div>
            <div className="TwoProd pt-4 w-full h-full flex justify-between    ">
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
            </div>
            <div className="TwoProd w-full h-full  flex justify-between  ">
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                <div className="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
            </div>
        </div>
        <div className=" p-4 bigProdBox justify-around  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
            <div className="text font-bold text-2xl">Up to 60% off | Styles for women</div>
            <div className="watch bg-yellow-400 w-full h-full"></div>
        </div>
        <div className=" bigProdBox justify-center  flex-col flex  bg-none w-[350px] h-[420px]">
            <div className="signin w-full h-[300px] bg-white"></div>
            <div className="sponsered  bg-transparent w-full h-full p-6 "><img src={img4} alt="" srcset=""/></div>
        </div>
    </div>
   </div>
   <div class="box2 bg-[#cdcdcd] h-full w-full absolute bottom-[-100px]  z-[-1]  ">
        <div class="z-[1] pt-10 container flex justify-around  relative bg-[#cdcdcd] top-[730px]  w-full h-full ">


            <div class="p-4 bigProdBox justify-around  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
                <div class="text font-bold text-2xl">Up to 60% off | Styles for women</div>
                <div class="TwoProd pt-4 w-full h-full flex justify-between    ">
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div> 
                </div>
                <div class="TwoProd w-full h-full  flex justify-between  ">
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                </div>
            </div>
            <div class=" p-4 bigProdBox justify-between  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
                <div class="text font-bold text-2xl">Up to 60% off | Styles for women</div>
                <div class="TwoProd pt-4 w-full h-full flex justify-between    ">
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                </div>
                <div class="TwoProd w-full h-full  flex justify-between  ">
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                </div>
            </div>
            <div class=" p-4 bigProdBox justify-between  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
                <div class="text font-bold text-2xl">Up to 60% off | Styles for women</div>
                <div class="TwoProd pt-4 w-full h-full flex justify-between    ">
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                </div>
                <div class="TwoProd w-full h-full  flex justify-between  ">
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                    <div class="prodtwo bg-yellow-400 w-[150px]  h-[120px] "></div>
                </div>
            </div>
            <div class=" p-4 bigProdBox justify-around  flex-col flex  bg-[#FFFFFF] w-[350px] h-[420px]">
                <div class="text font-bold text-2xl">Up to 60% off | Styles for women</div>
                <div class="watch bg-yellow-400 w-full h-full"></div>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Home;
