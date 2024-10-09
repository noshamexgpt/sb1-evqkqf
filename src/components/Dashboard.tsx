import React from 'react'
import { Users, Monitor, Cpu, HardDrive } from 'lucide-react'
import { Client } from '../App'

type DashboardProps = {
  clients: Client[];
}

const Dashboard: React.FC<DashboardProps> = ({ clients }) => {
  const totalEquipment = clients.reduce((sum, client) => sum + client.inventory.length, 0);
  const totalScreens = clients.reduce((sum, client) => sum + client.inventory.filter(item => item.type === 'Écran').length, 0);
  const totalPCs = clients.reduce((sum, client) => sum + client.inventory.filter(item => item.type === 'PC').length, 0);
  const totalPrinters = clients.reduce((sum, client) => sum + client.inventory.filter(item => item.type === 'Imprimante').length, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<Users size={24} />} title="Clients" value={clients.length.toString()} />
        <DashboardCard icon={<Monitor size={24} />} title="Écrans" value={totalScreens.toString()} />
        <DashboardCard icon={<Cpu size={24} />} title="PCs" value={totalPCs.toString()} />
        <DashboardCard icon={<HardDrive size={24} />} title="Imprimantes" value={totalPrinters.toString()} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Aperçu des clients</h2>
        <div className="bg-white shadow rounded-lg p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre d'équipements</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{client.inventory.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      <div className="rounded-full bg-blue-100 p-3 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  )
}

export default Dashboard