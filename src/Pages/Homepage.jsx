import Customselect from "../UI/Customselect";
import Input from "../UI/Input";
import Fab from "@mui/material/Fab";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import OptimisedList from "../UI/OptimisedList";
import Button from "@mui/material/Button";
import { useContext } from "react";
import dataContext from "../Store/DataContext";
import axios from "axios";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();
  const dataCtx = useContext(dataContext);
  const compareHandler = () => {
    const {
      primaryKey,
      skippingKey,
      firstInputFileName,
      secondInputFileName,
      firstInputCsvFiles,
      secondInputCsvFiles,
    } = dataCtx;

    // if (firstInputCsvFiles.length === 0) {
    //   alert("Choose first CSV file");
    //   return;
    // } else if (secondInputCsvFiles.length === 0) {
    //   alert("Choose second CSV file");
    //   return;
    // } else if (primaryKey === "") {
    //   alert("Please select primary key");
    //   return;
    // }

    const sendRequest = async () => {
      // Create a FormData object
      try {
        const formData = new FormData();
        // Append file data to FormData
        formData.append("firstInputCsvFile", firstInputCsvFiles);
        formData.append("secondInputCsvFile", secondInputCsvFiles);

        // Append other parameters to FormData
        formData.append("firstInputFileName", firstInputFileName);
        formData.append("secondInputFileName", secondInputFileName);
        formData.append("primaryKey", primaryKey);
        formData.append("skippingKey", skippingKey);

        // Make the POST request with Axios
        const response = await axios.post(
          "http://localhost:4000/compareData",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        dataCtx.addToCorrectedCsv(response.data);
        // const csvData = response.data;
        // const blob = new Blob([csvData], { type: "text/csv" });

        // // Create a temporary URL for the Blob
        // const url = URL.createObjectURL(blob);

        // // Create a link element
        // const link = document.createElement("a");
        // link.href = url;
        // link.download = "data.csv"; // Set the filename for the downloaded file
        // document.body.appendChild(link);

        // //  link to trigger the download
        // link.click();

        // // Cleanup: Remove the link and revoke the URL
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url);
        // Handle response
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();

    // navigate("/correct_compare_csv", { replace: false });
  };
  return (
    <>
      <main className="flex flex-col m-3 p-4 gap-5 bg-white rounded-md">
        <div className="border-dashed p-3 border-4 rounded-md">
          <div className="">
            <h1 className="text-center m-5 text-black-900">
              MATCH AND COMPARE DATA
            </h1>
            <div className="flex flex-row justify-between  gap-10 mb-6">
              <Input label="Select Paper 1" state="first" type="text/csv" />
              <Input label="Select Paper 2" state="second" type="text/csv" />
              <Input
                label="Select Image Zipfile"
                state="third"
                type="application/zip,application/x-zip-compressed"
              />
            </div>
            <div className="flex flex-row justify-between  gap-10 mb-6">
              <div className="w-1/2">
                <Customselect label="Select Image Column" />
              </div>
              <div className="w-1/2">
                <Customselect label="Select Primary Key" />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="border pl-2 pb-2  bg-slate-100 rounded w-1/3">
              <div className="flex flex-row pt-2 pb-2 justify-between self-center ">
                <p className="text-sm font-semibold align-bottom self-center ">
                  Select Key For Skipping Comparison
                </p>
                <Button>Clear All</Button>
              </div>
              <OptimisedList />
            </div>

            <div className="flex self-end">
              <Fab variant="extended" color="primary" onClick={compareHandler}>
                <CompareArrowsIcon sx={{ mr: 1 }} />
                Compare And Match
              </Fab>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
