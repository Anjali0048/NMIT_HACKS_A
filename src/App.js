import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import SponsorForm from './pages/SponsorForm';
import OrganizerForm from './pages/OrganizerForm';
import SponsorDetail from './pages/SponsorDetail';

function App() {
  return (
    <div>
      <SponsorDetail/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/sponsorForm" element={<SponsorForm/>}/>
        <Route path="/organiserForm" element={<OrganizerForm/>}/>
        <Route path="/sponsorDetails" element={<SponsorDetail/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
