import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layouts/PublicLayout';
import AdminLayout from '../components/layouts/AdminLayout';
import HomePage from '../components/layouts/HomePage';
import AboutPage from '../components/layouts/AboutPage';
import LoginPage from '../components/layouts/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Rutas de administración */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;