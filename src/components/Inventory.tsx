import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Plus } from 'lucide-react'
import { Client } from '../App'

type InventoryProps = {
  clients: Client[];
}

const Inventory: React.FC<InventoryProps> = ({ clients }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Clients</h1>
        <Link to="/add-client" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
          <Plus size={20} className="mr-2" />
          Ajouter un client
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <ul className="divide-y divide-gray-200">
          {clients.map((client) => (
            <li key={client.id} className="py-4">
              <Link to={`/client/${client.id}`} className="flex items-center hover:bg-gray-50 p-2 rounded">
                <Users size={24} className="mr-4 text-blue-600" />
                <div>
                  <p className="text-lg font-medium text-gray-900">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.inventory.length} équipements</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Inventory