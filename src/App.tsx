import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Inventory from './components/Inventory'
import ClientDetails from './components/ClientDetails'
import AddClient from './components/AddClient'
import { InventoryItem } from './components/AddEquipment'

export type Client = {
  id: number;
  name: string;
  inventory: InventoryItem[];
}

function App() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: 'Client A',
      inventory: [
        { id: 1, type: 'Écran', brand: 'Dell', model: 'U2419H', serialNumber: 'ABC123', purchaseDate: '2023-01-15', warranty: '24' },
        { id: 2, type: 'PC', brand: 'HP', model: 'EliteDesk 800 G5', serialNumber: 'DEF456', purchaseDate: '2023-02-20', warranty: '36' },
      ]
    },
    {
      id: 2,
      name: 'Client B',
      inventory: [
        { id: 3, type: 'Imprimante', brand: 'Brother', model: 'HL-L3270CDW', serialNumber: 'GHI789', purchaseDate: '2023-03-10', warranty: '12' },
      ]
    }
  ]);

  const addClient = (name: string) => {
    const newClient: Client = {
      id: clients.length + 1,
      name,
      inventory: []
    };
    setClients([...clients, newClient]);
  };

  const addEquipment = (clientId: number, equipment: Omit<InventoryItem, 'id'>) => {
    setClients(prevClients => {
      return prevClients.map(client => {
        if (client.id === clientId) {
          return {
            ...client,
            inventory: [
              ...client.inventory,
              { ...equipment, id: client.inventory.length + 1 }
            ]
          };
        }
        return client;
      });
    });
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard clients={clients} />} />
            <Route path="/inventory" element={<Inventory clients={clients} />} />
            <Route path="/client/:id" element={<ClientDetails clients={clients} addEquipment={addEquipment} />} />
            <Route path="/add-client" element={<AddClient addClient={addClient} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App