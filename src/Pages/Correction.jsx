import React, { useContext, useEffect, useState } from "react";
import dataContext from "../Store/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageCarousel from "../UI/Imagecarousel";
import classes from "./Correction.module.css";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Table from "../UI/Table";
import { useLocation } from "react-router";
const Correction = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [csvObj, setCsvObj] = useState({});
  const [currImgUrl, setImgUrl] = useState("");
  const dataCtx = useContext(dataContext);
  const location = useLocation();
  const state = location.state;

  // useEffect(() => {}, []);
  useEffect(() => {
    // setCsvObj(dataCtx.correctedCsv[currIndex]);
    console.log(currIndex);
  }, [currIndex]);
  console.log(dataCtx.zipImageFile);
  console.log(dataCtx.correctedCsv);
  const prevHandler = () => {
    setCurrIndex((prev) => prev - 1);
  };
  const nextHandler = () => {
    console.log("next called");
    setCurrIndex((prev) => prev + 1);
  };
  return (
    <>
      <div className={`flex flex-row justify-between ${classes.correction} `}>
        <div className="w-full h-screen border-black-300 border  ">
          <div className="h-full">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-8680d5826c698565ab7a1d35f28889a6-lq"
              className="w-full h-full object-contain p-5"
              alt="omr sheet"
            />
          </div>
        </div>
        <div className="w-full border-black-800 border-2">
          <h1>hello</h1>
          <Table />
          <div className="flex justify-around">
            <Button
              variant="contained"
              startIcon={<ArrowBackIosIcon />}
              onClick={prevHandler}
            >
              PREV
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              onClick={nextHandler}
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Correction;
