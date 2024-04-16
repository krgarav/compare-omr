import { useState } from "react";
import DataContext from "./DataContext";

const initialData = {
  csvHeader: [],
  primaryKey: "",
  skippingKey: [],
  firstInputFileName: "",
  secondInputFileName: "",
  firstInputCsvFiles: [],
  secondInputCsvFiles: [],
};

const DataProvider = (props) => {
  const [dataState, setDataState] = useState(initialData);

  const addToCsvHeaderHandler = (data) => {
    setDataState((item) => {
      return {
        ...item,
        csvHeader: data,
      };
    });
  };
  const addToPrimaryKeyHandler = (key) => {
    setDataState((item) => {
      return {
        ...item,
        primaryKey: key,
      };
    });
  };
  const addToSkippingKeyHandler = (data) => {
    setDataState((item) => {
      return {
        ...item,
        skippingKey: data,
      };
    });
  };
  const addFirstInputFileNameHandler = (name) => {
    setDataState((item) => {
      return {
        ...item,
        firstInputFileName: name,
      };
    });
  };
  const addSecondInputFileNameHandler = (name) => {
    setDataState((item) => {
      return {
        ...item,
        secondInputFileName: name,
      };
    });
  };
  const addFirstInputCsvFileHandler = (file) => {
    setDataState((item) => {
      return {
        ...item,
        firstInputCsvFiles: file,
      };
    });
  };
  const addSecondInputCsvFileHandler = (file) => {
    setDataState((item) => {
      return {
        ...item,
        secondInputCsvFiles: file,
      };
    });
  };
  const dataContext = {
    csvHeader: dataState.csvHeader,
    primaryKey: dataState.primaryKey,
    skippingKey: dataState.skippingKey,
    firstInputFileName: dataState.firstInputFileName,
    secondInputFileName: dataState.secondInputFileName,
    firstInputCsvFiles: dataState.firstInputCsvFiles,
    secondInputCsvFiles: dataState.secondInputCsvFiles,
    addToCsvHeader: addToCsvHeaderHandler,
    addToPrimaryKey: addToPrimaryKeyHandler,
    addToSkippingKey: addToSkippingKeyHandler,
    addFirstInputFileName: addFirstInputFileNameHandler,
    addSecondInputFileName: addSecondInputFileNameHandler,
    addFirstInputCsvFile: addFirstInputCsvFileHandler,
    addSecondInputCsvFile: addSecondInputCsvFileHandler,
  };
  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
