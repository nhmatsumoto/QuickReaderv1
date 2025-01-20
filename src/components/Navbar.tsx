import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string): string => {
    return location.pathname === path 
      ? "bg-blue-700 text-white"
      : "text-gray-300 hover:bg-blue-700 hover:text-white";
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">Quick Reader v1</span>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
            >
              Playground
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}
            >
              Sobre
            </Link>
            {/* <Link
              to="/stats"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/stats')}`}
            >
              Estatísticas
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;