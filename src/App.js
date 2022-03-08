import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/about";
import "./App.css";
import Choose from "./pages/choose/choose";
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
import SettingsPageUser from "./pages/userPages/settingClenit/settingsClient";
import JobUpdate from "./pages/userPages/jobUpdate/jobUpdate";
import Contact from "./pages/contact/Contact";

import Navbar from "./components/navbar/navbar";
import AboutUs from "./pages/about/about-us";
import JobsPage from "./pages/Home/JobsPage/JobsPage";
import Footer from "./components/Footer/Footer";
import OnGoingJob from "./pages/userPages/onGoingJob/onGoingJob";
import JobRate from "./pages/userPages/onGoingJob/JobRate";
import ViewContactorProfile from './pages/contractorPages/viewContractorProfile/contractorProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} exact element={<Home />}></Route>
        <Route path={"Home"} exact element={<Home />}></Route>
        <Route path={"/About"} exact element={<About />}></Route>
        <Route path={"/clientLogin"} exact element={<ClientLogin />}></Route>
        <Route path={"/ClientSignUp"} exact element={<ClientSignUp />}></Route>
        <Route path={"/ClientReset"} exact element={<ClientReset />}></Route>
        <Route
          path={"/ClientProfile"}
          exact
          element={<ClientProfile />}
        ></Route>
        <Route
          path={"/ClientSetting"}
          exact
          element={<ClientSetting />}
        ></Route>
        <Route
          path={"/ContractorLogin"}
          exact
          element={<ContractorLogin />}
        ></Route>
        <Route
          path={"/ContractorSignUp"}
          exact
          element={<ContractorSignUp />}
        ></Route>
        <Route
          path={"/ContractorReset"}
          exact
          element={<ContractorReset />}
        ></Route>
        <Route path={"/JobDetails/:id"} exact element={<JobDetails />}></Route>
        <Route
          path={"/ContactorProfile"}
          exact
          element={<ContactorProfile />}
        ></Route>
        <Route
          path={"/ContractorSettings"}
          exact
          element={<ContractorSettings />}
        ></Route>
        <Route
          path={"/JobProposal/:id"}
          exact
          element={<JobProposal />}
        ></Route>
        <Route path={"/JobCreation"} exact element={<JobCreation />}></Route>
        <Route path={"/JobUpdate/:id"} exact element={<JobUpdate />}></Route>
        <Route
          path={"/SettingsPageUser"}
          exact
          element={<SettingsPageUser />}
        ></Route>
        <Route path={"/Choose"} exact element={<Choose />}></Route>
        <Route path={"/JobsPage"} exact element={<JobsPage />}></Route>
        <Route path={"/Contact"} exact element={<Contact />}></Route>
        <Route path={"/AboutUs"} exact element={<AboutUs />}></Route>
        <Route path={"/onGoingJob/:id"} exact element={<OnGoingJob />}></Route>
        <Route path={"/:jobID/jobRate/:contractorID"} exact element={<JobRate />}></Route>
        <Route path={"/ViewContactorProfile/:contractorID"} exact element={<ViewContactorProfile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
