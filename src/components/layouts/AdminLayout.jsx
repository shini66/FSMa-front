import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <h1 className="text-lg font-bold tracking-tight">FSMa Admin</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-lg text-sm font-medium bg-gray-800 text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            Usuarios
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            Productos
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            Configuraci&oacute;n
          </a>
        </nav>
        <div className="px-4 py-4 border-t border-gray-700">
          <span className="text-sm text-gray-400">admin@fsma.com</span>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
