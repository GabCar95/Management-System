import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./utils/PrivateRoutes"
import { AuthProvider } from './context/AuthContext'

import Dashview from "./pages/Dashview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomerView from './pages/CustomerView';
import MaintenanceView from './pages/MaintenanceView';
import Custdetail from './pages/CustDetail';
import CustCreate from './pages/CustCreate';
import MaintDetail from './pages/MaintDetail';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Dashview />} />

              <Route path="/customer" element={<CustomerView />} />          
              <Route path="/customer/:id" element={<Custdetail />} />
              <Route path="/customer/create" element={<CustCreate />} />

              <Route path="/maintenance" element={<MaintenanceView />} />
              <Route path="/maintenance/:id" element={<MaintDetail />} />

            </Route>

          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
