import Customselect from "./UI/Customselect";
import Input from "./UI/Input";
import Fab from "@mui/material/Fab";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import OptimisedList from "./UI/OptimisedList";
function App() {
  return (
    <>
      <main className="flex flex-col m-3 p-4 gap-5 border-dashed border-4  ">
        <div className="">
          <h1 className="text-center m-5">Match and compare data</h1>
          <div className="flex flex-row justify-between  gap-10 mb-6">
            <Input label="Select Paper 1" />
            <Input label="Select Paper 2" />
          </div>

          <Customselect label="Select Primary Key" />
        </div>
        <div className="flex justify-between">
          <div className="border pl-5 pt-5">
            <h2>Select key for skipping comparison </h2>
            <OptimisedList />
          </div>

          <div className="flex self-end">
            <Fab variant="extended" color="primary">
              <CompareArrowsIcon sx={{ mr: 1 }} />
              Compare And Match
            </Fab>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
