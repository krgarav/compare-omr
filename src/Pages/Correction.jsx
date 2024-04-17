import React, { useContext } from "react";
import dataContext from "../Store/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageCarousel from "../UI/Imagecarousel";
const Correction = () => {
  const dataCtx = useContext(dataContext);
  const imgUrls = dataCtx.zipImageFile.map((item) => item.src);
  const allImages = dataCtx.zipImageFile.map((item, index) => {
    // console.log(item);
    return (
      <div key={index}>
        {/* <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" /> */}
        <img src={item.src} />
        <p className="legend">Legend 1</p>
      </div>
    );
  });
  console.log(dataCtx.zipImageFile);
console.log(dataCtx.correctedCsv);
  return (
    <>
      <div className="flex flex-row">
        <div className="w-[1/2]">
          {/* {allImages} */}
          {/* <Carousel style={{ width: "50vw" }}>{allImages}</Carousel> */}
          <ImageCarousel images={imgUrls} />
        </div>
        <div className="w-[1/2]">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};

export default Correction;
