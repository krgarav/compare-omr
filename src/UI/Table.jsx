import React, { useContext, useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import dataContext from "../Store/DataContext";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const TableCol = (props) => {
  // const [objData, setObjData] = useState([]);
  const [resultObj, setResultObj] = useState([]);
  const inputRef = useRef();
  const dataCtx = useContext(dataContext);
  useEffect(() => {
    inputRef.current.value = props.data.corrected;
  }, [inputRef]);
  useEffect(() => {
    // setObjData(props.data);

    setResultObj(props.data);
  }, [props.data]);

  const rows = [
    createData(
      resultObj.PRIMARY,
      resultObj.COLUMN_NAME,
      resultObj.FILE_1_DATA,
      resultObj.FILE_2_DATA
    ),
  ];
  const saveHandler = () => {
    const csvFile = dataCtx.csvFile;

    if (inputRef.current) {
      for (let i = 0; i < csvFile.length; i++) {
        if (
          csvFile[i][dataCtx.primaryKey].trim() === resultObj.PRIMARY.trim()
        ) {
          csvFile[i][resultObj.COLUMN_NAME] = inputRef.current.value;
        }
      }
      // for(let j=0 ; j< cs)
      dataCtx.setCsvFile(csvFile);
    }
    dataCtx. .corrected = inputRef.current.value;
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          Match and correct the data According to above data table
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>PRIMARY</TableCell>
            <TableCell align="right">COLUMN_NAME</TableCell>
            <TableCell align="right">FILE_1_DATA</TableCell>
            <TableCell align="right">FILE_2_DATA</TableCell>
            <TableCell align="right">ENTER CORRECTED DATA</TableCell>
            <TableCell align="right">SAVE BUTTON</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {dataCtx.primaryKey} : {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <input
                  type="text"
                  placeholder="Enter correct answer"
                  className="border p-3 w-2/3"
                  ref={inputRef}
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  startIcon={<SaveIcon />}
                  variant="outlined"
                  color="success"
                  onClick={saveHandler}
                >
                  SAVE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCol;
