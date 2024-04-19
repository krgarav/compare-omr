import React, { useContext, useEffect, useState } from "react";
import dataContext from "../Store/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Correction.module.css";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Table from "../UI/Table";
import { useLocation } from "react-router";
// import { parse } from "json2csv";
const Correction = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [csvObj, setCsvObj] = useState({});
  const [currImgUrl, setImgUrl] = useState("");
  const dataCtx = useContext(dataContext);
  const location = useLocation();
  const state = dataCtx.imageMappedData;
  console.log(state);
  // useEffect(() => {}, []);
  useEffect(() => {
    // setCsvObj(dataCtx.correctedCsv[currIndex]);
    console.log(currIndex);
  }, [currIndex]);
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
      <div className={`flex flex-row justify-between ${classes.correction} `}>
        <div className="w-full  border-black-300 border  ">
          <h1 className={`text-center text-3xl font-bold ${classes.imgHead}`}>
            Image Name : {state[currIndex].img.imgName}
          </h1>
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

          <div className="flex flex-col justify-center pt-5 pl-2 pr-2 pb-3">
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
              startIcon={<ArrowBackIosIcon />}
              onClick={downloadHandler}
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
