import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/about/about";
import "./App.css";
import ClientLogin from "./pages/userPages/clientLogin/login";
import ClientSignUp from "./pages/userPages/clientRegister/register";
import ClientReset from "./pages/userPages/clientReset/reset";
import ClientProfile from "./pages/userPages/cleintProfile/profile";
import ClientSetting from "./pages/userPages/settingClenit/settingsClient";
import ContractorLogin from "./pages/contractorPages/contractorLogin/login";
import ContractorSignUp from "./pages/contractorPages/contractorRegister/register";
import ContractorReset from "./pages/contractorPages/contractorReset/reset";
import JobDetails from "./pages/contractorPages/jobDetails/jobDetails";
import ContactorProfile from "./pages/contractorPages/contractorProfile/contractorProfile";
import ContractorSettings from "./pages/contractorPages/SettingsPage/settingsPage";
import JobProposal from "./pages/contractorPages/JobPorposal/jobPorposal";
import JobCreation from "./pages/userPages/jobCreation/jobReview";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} exact element={<Home />}></Route>
        <Route path={"/about"} exact element={<About />}></Route>
        <Route path={"/clientLogin"} exact element={<ClientLogin />}></Route>
        <Route path={"/clientsingup"} exact element={<ClientSignUp />}></Route>
        <Route path={"/clientReset"} exact element={<ClientReset />}></Route>
        <Route
          path={"/contractorLogin"}
          exact
          element={<ContractorLogin />}
        ></Route>
        <Route
          path={"/contractorSignUp"}
          exact
          element={<ContractorSignUp />}
        ></Route>
        <Route
          path={"/contractorReset"}
          exact
          element={<ContractorReset />}
        ></Route>
        <Route path={"/jobDetails"} exact element={<JobDetails />}></Route>
        <Route
          path={"/clientProfile"}
          exact
          element={<ClientProfile />}
        ></Route>
        <Route path={"/userSettings"} exact element={<ClientSetting />}></Route>
        <Route
          path={"/contactorProfile"}
          exact
          element={<ContactorProfile />}
        ></Route>
        <Route
          path={"/contractorSettings"}
          exact
          element={<ContractorSettings />}
        ></Route>
        <Route path={"/jobProposal"} exact element={<JobProposal />}></Route>
        <Route path={"/jobCreation"} exact element={<JobCreation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
