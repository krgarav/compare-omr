import React from "react";
const dataContext = React.createContext({
  csvHeader: [],
  primaryKey: "",
  skippingKey: [],
  firstInputFileName: "",
  secondInputFileName: "",
  firstInputCsvFiles: [],
  secondInputCsvFiles: [],
  addToCsvHeader: () => {},
  addToPrimaryKey: () => {},
  addToSkippingKey: () => {},
  addFirstInputFileName: () => {},
  addSecondInputFileName: () => {},
  addFirstInputCsvFile: () => {},
  addSecondInputCsvFile: () => {},
});

export default dataContext;
