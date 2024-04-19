import React from "react";
const dataContext = React.createContext({
  csvHeader: [],
  primaryKey: "",
  imageColName: "",
  skippingKey: [],
  firstInputFileName: "",
  secondInputFileName: "",
  firstInputCsvFiles: [],
  secondInputCsvFiles: [],
  correctedCsv: {},
  zipImageFile: [],
  imageMappedData: [],
  addToCsvHeader: () => {},
  addToPrimaryKey: () => {},
  addToSkippingKey: () => {},
  addFirstInputFileName: () => {},
  addSecondInputFileName: () => {},
  addFirstInputCsvFile: () => {},
  addSecondInputCsvFile: () => {},
  addToCorrectedCsv: () => {},
  addZipImageFile: () => {},
  setImageColName: () => {},
  setImageMappedData: () => {},
});

export default dataContext;
