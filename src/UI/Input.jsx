import React, { useState } from "react";

const Input = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileHandler = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const sendRequest = async () => {
        try {
          const response = await axios.post(
            "http://your-backend-endpoint",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("File uploaded successfully:", response.data);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };
      sendRequest();
    } else {
      setSelectedFile(null); // Clear selected file if not a CSV file
    }
  };
  return (
    <>
      <div className="grid w-full  items-center gap-1.5">
        <label className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {props.label}
        </label>
        <input
          id="picture"
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          onChange={fileHandler}
          accept=".csv"
        />
      </div>
    </>
  );
};

export default Input;
