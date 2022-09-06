
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DataTable from "./Components/DataTable";
import Registeration from "./Components/Registeration";
import "antd/dist/antd.min.css"
import Login from "./Components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Registeration/>}></Route>
          <Route path="datatable" element={<DataTable/>}></Route>
          <Route path="login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
