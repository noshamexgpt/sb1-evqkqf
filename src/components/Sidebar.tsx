import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, Package, UserPlus } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center">IT Business</h2>
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <LayoutDashboard className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/inventory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <Package className="inline-block mr-2" size={20} />
          Clients et Inventaire
        </Link>
        <Link to="/add-client" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <UserPlus className="inline-block mr-2" size={20} />
          Ajouter un client
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar