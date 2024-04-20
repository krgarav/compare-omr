import React, { useContext, useEffect, useState } from "react";
import dataContext from "../Store/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Correction.module.css";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Table from "../UI/Table";
import { useLocation } from "react-router";
import DownloadIcon from "@mui/icons-material/Download";
// import { parse } from "json2csv";
const Correction = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [csvObj, setCsvObj] = useState({});
  const [currImgUrl, setImgUrl] = useState("");
  const dataCtx = useContext(dataContext);
  const location = useLocation();
  const state = dataCtx.imageMappedData;
  useEffect(() => {
    document.body.style.userSelect = "none";
    return () => {
      // Cleanup function to reset the style when the component unmounts
      document.body.style.userSelect = "auto";
    };
  }, []);

  const prevHandler = () => {
    setCurrIndex((prev) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const nextHandler = () => {
    setCurrIndex((prev) => {
      if (prev === state.length - 1) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  // Function to convert JSON to CSV
  const convertToCsv = (jsonData) => {
    const headers = Object.keys(jsonData[0]);
    const csvHeader = headers.join(",") + "\n";
    const csvData = jsonData
      .map((obj) => {
        return headers.map((key) => obj[key]).join(",");
      })
      .join("\n");
    return csvHeader + csvData;
  };
  const downloadHandler = () => {
    const jsonObj = dataCtx.csvFile; // Assuming dataCtx.csvFile is a JSON object

    // Convert JSON to CSV
    const csvData = convertToCsv(jsonObj);

    // Create a Blob object
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a download link
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
  };

  return (
    <>
      <div
        className={`flex lg:flex-row md:flex-col justify-between animate-slide-left-to-right ${classes.correction} `}
      >
        <div className="w-full  border-black-300 border  ">
          <div className={`text-center text-3xl font-bold ${classes.imgdiv}`}>
            <h1 className={`text-center text-3xl font-bold ${classes.imgHead}`}>
              Image Name : {state[currIndex].img.imgName}
            </h1>
          </div>

          <img
            src={state[currIndex].img.imgUrl}
            className={`w-full  object-contain p-5 ${classes.imgContainer}`}
            alt="omr sheet"
          />
        </div>
        <div className="w-full border-black-800 border-2 ">
          <h1 className="text-center text-3xl font-bold">
            {currIndex + 1} of {state.length}
          </h1>

          <div className="pt-5 pl-4 pr-4 pb-3 h-2/3  bg-opacity-15 bg-black rounded mb-5">
            <Table data={state[currIndex].data} />
          </div>

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
              endIcon={<DownloadIcon />}
              onClick={downloadHandler}
              color="secondary"
            >
              DOWNLOAD CSV
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
