import React from "react";
const dataContext = React.createContext({
  csvHeader: [],
  primaryKey: "",
  skippingKey: [],
  firstInputFileName: "",
  secondInputFileName: "",
  firstInputCsvFiles: [],
  secondInputCsvFiles: [],
  correctedCsv: {},
  zipImageFile: [],
  addToCsvHeader: () => {},
  addToPrimaryKey: () => {},
  addToSkippingKey: () => {},
  addFirstInputFileName: () => {},
  addSecondInputFileName: () => {},
  addFirstInputCsvFile: () => {},
  addSecondInputCsvFile: () => {},
  addToCorrectedCsv: () => {},
  addZipImageFile : ()=>{}
});

export default dataContext;
