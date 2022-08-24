import { Routes, Route, withRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import Products from "./pages/Products";
import SecurePage from "./pages/SecurePage";
import RegisterDoctors from "./pages/RegisterDoctors";
import SuperAdmin from "./pages/SuperAdmin";
import GivingTreatment from "./pages/GivingTreatment";
import RegisterPatient from "./pages/RegisterPatient";
import Doctors from "./pages/doctors";
import RegisterAdmin from "./pages/RegisterAdmin";
import EditUserDoctor from "./pages/EditUserDoctor";
import PatientTable from "./pages/PatientTable";
import ViewPatient from "./pages/ViewPatient";
import PatientReportTable from "./pages/PatientReportTable";
import RegisterMedication from "./pages/RegisterMedication";


function App() {
  return (
    <Routes>

      {/* <Route path="/" element={<Navbarsuperadmin />} /> */}

      <Route path="/RegisterMedication" element={<RegisterMedication />} />
      <Route path="/ViewPatient/:patient_id" element={<ViewPatient />} />
      <Route path="/PatientTable" element={<PatientTable />} />
      <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
      <Route path="/EditUserDoctor" element={<EditUserDoctor />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/RegisterDoctors" element={<RegisterDoctors />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/superadmin" element={<SuperAdmin />} />
      <Route path="/RegisterPatient" element={<RegisterPatient />} />
      <Route path="/givingtreatment/:patient_id" element={<GivingTreatment />} />
      <Route path="/patientreporttable" element={<PatientReportTable />} />
    </Routes>
  );
}

export default App;