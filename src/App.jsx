import Homepage from "./Pages/Homepage";
import { Routes, Route, Navigate } from "react-router-dom";
import Correction from "./Pages/Correction";

const App = () => {
  return (
    <Routes>
      <Route path="/comparecsv" element={<Homepage />} />
      <Route path="/correct_compare_csv" element={<Correction />} />
      <Route path="*" element={<Navigate to="/comparecsv" />} />
    </Routes>
  );
};

export default App;
