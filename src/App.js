import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
