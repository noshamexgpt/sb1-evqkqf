import React from 'react'
import { useParams } from 'react-router-dom'
import { Monitor, Cpu, Printer, Server, Router } from 'lucide-react'
import { Client } from '../App'
import AddEquipment, { InventoryItem } from './AddEquipment'

type ClientDetailsProps = {
  clients: Client[];
  addEquipment: (clientId: number, equipment: Omit<InventoryItem, 'id'>) => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ clients, addEquipment }) => {
  const { id } = useParams<{ id: string }>();
  const client = clients.find(c => c.id === Number(id));

  if (!client) {
    return <div className="p-6">Client non trouvé</div>;
  }

  const handleAddEquipment = (equipment: Omit<InventoryItem, 'id'>) => {
    addEquipment(client.id, equipment);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Écran':
        return <Monitor size={20} className="mr-2" />;
      case 'PC':
        return <Cpu size={20} className="mr-2" />;
      case 'Imprimante':
        return <Printer size={20} className="mr-2" />;
      case 'Serveur':
        return <Server size={20} className="mr-2" />;
      case 'Routeur':
        return <Router size={20} className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">{client.name}</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Inventaire</h2>
        {client.inventory.length === 0 ? (
          <p>Aucun équipement enregistré pour ce client.</p>
        ) : (
          <ul className="space-y-4">
            {client.inventory.map((item) => (
              <li key={item.id} className="flex items-center">
                {getIcon(item.type)}
                <span>{item.type} - {item.brand} {item.model}</span>
                <span className="ml-4 text-sm text-gray-500">S/N: {item.serialNumber}</span>
                <span className="ml-4 text-sm text-gray-500">Acheté le: {new Date(item.purchaseDate).toLocaleDateString()}</span>
                <span className="ml-4 text-sm text-gray-500">Garantie: {item.warranty} mois</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <AddEquipment addEquipment={handleAddEquipment} />
    </div>
  )
}

export default ClientDetails