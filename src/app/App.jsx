import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/layouts/PublicLayout';
import AdminLayout from '../components/layouts/AdminLayout';
import HomePage from '../components/layouts/HomePage';
import AboutPage from '../components/layouts/AboutPage';
import LoginPage from '../components/layouts/LoginPage';
import UserPage from '../components/ListUserAxios';
import ArticlePage from '../components/ListArticleAxios';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/articles' element={<ArticlePage />} />
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