import { Outlet, Link } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight">
            FSMa
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Inicio
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Acerca de
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FSMa. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
