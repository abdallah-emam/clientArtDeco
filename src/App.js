import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/about/about";
import "./App.css";
import ClientLogin from "./pages/userPages/clientLogin/login";
import ClientSignUp from "./pages/userPages/clientRegister/register";
import ClientReset from "./pages/userPages/clientReset/reset";
import ContractorLogin from "./pages/contractorPages/contractorLogin/login";
import ContractorSignUp from "./pages/contractorPages/contractorRegister/register";
import ContractorReset from "./pages/contractorPages/contractorReset/reset";
import JobDetails from "./pages/contractorPages/jobDetails/jobDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact element={<Home />}></Route>
          <Route path={"/about"} exact element={<About />}></Route>
          <Route path={"/clientLogin"} exact element={<ClientLogin />}></Route>
          <Route
            path={"/clientsingup"}
            exact
            element={<ClientSignUp />}
          ></Route>
          <Route path={"/clientReset"} exact element={<ClientReset />}></Route>
          <Route path={"/contractorLogin"} exact element={<ContractorLogin />}></Route>
          <Route path={"/contractorSignUp"} exact element={<ContractorSignUp />}></Route>
          <Route path={"/contractorReset"} exact element={<ContractorReset />}></Route>
          <Route path={"/jobDetails"} exact element={<JobDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
