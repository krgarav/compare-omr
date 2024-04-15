import Customselect from "./UI/Customselect";
import Input from "./UI/Input";
import Fab from "@mui/material/Fab";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import OptimisedList from "./UI/OptimisedList";
import Button from "@mui/material/Button";
import "./App.css";
function App() {
  return (
    <>
      <main className="flex flex-col m-3 p-4 gap-5 bg-white rounded-md">
        <div className="border-dashed p-3 border-4 rounded-md">
          <div className="">
            <h1 className="text-center m-5">Match and compare data</h1>
            <div className="flex flex-row justify-between  gap-10 mb-6">
              <Input label="Select Paper 1" />
              <Input label="Select Paper 2" />
            </div>
            <Customselect label="Select Primary Key" />
          </div>
          <div className="flex justify-between">
            <div className="border pl-2 pb-2  bg-slate-100 rounded">
              <div className="flex flex-row pt-2 pb-2 justify-between self-center ">
                <p className="text-sm font-semibold align-bottom self-center ">
                  Select Key For Skipping Comparison
                </p>
                <Button>Clear All</Button>
              </div>
              <OptimisedList />
            </div>

            <div className="flex self-end">
              <Fab variant="extended" color="primary">
                <CompareArrowsIcon sx={{ mr: 1 }} />
                Compare And Match
              </Fab>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
