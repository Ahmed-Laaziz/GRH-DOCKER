import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TokenProvider } from './auth/TokenContext';
import Login from "./components/sign-in";
import Home from "./pages/home";
import Add from "./pages/addProfessor";

import AddFonctionnaire from "./pages/fonctionnaire/add-fonctionnaire";
import All from "./pages/allProfessors";
import AllFonctionnaires from "./pages/fonctionnaire/all-fonctionnaires";
import Demandes from "./pages/options";
import Demands_from_admin from "./pages/demands/admin/demands";
import Fonctionnaires_demands_from_admin from "./pages/demands/admin/demands-fonctionnaires";

import AttestationTravail from "./documents/AttestationTravail";
import OrdreMission from "./documents/OrderDeMission";
import AutorisationQuitterTerritoire from "./documents/AutorisationDeQuitterLeTerritoire"
import DecisionConge from "./documents/DecisionDeCongeAdministratif"
import ProfDemandes from "./pages/profDemandes";
import AdminDemandes from "./pages/adminDemandes";
import ChefDemandes from "./pages/chefDemandes";
import Hists from "./pages/profHistoriques";
import { ProfProvider } from "./context/ProfContext";
import Proffile from "./pages/profProfile";
import DemandsHistory from "./pages/demandsHistory";
import FileUpload from "./pages/uploadFile";
import FilesDownload from "./pages/profFiles";
import Dashboard from "./pages/dashboard";
import RetreiveSide from "./components/pass-oublier";
import NewPass from "./components/new-pass";

import AllDepartements from "./pages/departements";
import AddDepartement from "./pages/addDepartement";

export default function App() {
  return (
    <div>
    <TokenProvider>
      <ProfProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="home" element={<Dashboard />} />
        <Route path="profil" element={<Home />} />
        <Route path="add-professor" element={<Add/>} />

        <Route path="add-fonctionnaire" element={<AddFonctionnaire/>} />
        <Route path="all-professors" element={<All/>} />
        <Route path="all-fonctionnaires" element={<AllFonctionnaires/>} />
        <Route path="demandes" element={<Demandes/>} />
        <Route path="espace-demandes" element={<Demands_from_admin/>} />
        <Route path="espace-demandes-fonctionnaires" element={<Fonctionnaires_demands_from_admin/>} />

        <Route path="attestationTravail" element={<AttestationTravail/>} />
        <Route path="ordreMission" element={<OrdreMission/>} />
        <Route path="autorisationQuitterTerritoire" element={<AutorisationQuitterTerritoire/>} />
        <Route path="decisionConge" element={<DecisionConge/>} />
        <Route path="prof-demandes" element={<ProfDemandes/>} />
        <Route path="demands-history" element={<DemandsHistory/>} />
        <Route path="admin-demandes" element={<AdminDemandes/>} />
        <Route path="chef-demandes" element={<ChefDemandes/>} />
        <Route path="historiques" element={<Hists/>} />
        <Route path="prof-profile" element={<Proffile/>} />
        <Route path="file-upload" element={<FileUpload/>} />
        <Route path="files-download" element={<FilesDownload/>} />
        <Route path="retrieve" element={<RetreiveSide/>} />
        <Route path="new-pass" element={<NewPass/>} />

        <Route path="all-departements" element={<AllDepartements/>} />
        <Route path="add-departement" element={<AddDepartement/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </ProfProvider>
    </TokenProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);