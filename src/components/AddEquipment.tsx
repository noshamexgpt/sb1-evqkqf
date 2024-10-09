import React, { useState } from 'react';

type AddEquipmentProps = {
  addEquipment: (equipment: Omit<InventoryItem, 'id'>) => void;
};

export type InventoryItem = {
  id: number;
  type: string;
  brand: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  warranty: string;
};

const AddEquipment: React.FC<AddEquipmentProps> = ({ addEquipment }) => {
  const [equipment, setEquipment] = useState<Omit<InventoryItem, 'id'>>({
    type: '',
    brand: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
    warranty: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEquipment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEquipment(equipment);
    setEquipment({
      type: '',
      brand: '',
      model: '',
      serialNumber: '',
      purchaseDate: '',
      warranty: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Ajouter un équipement</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            name="type"
            value={equipment.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Sélectionner un type</option>
            <option value="Écran">Écran</option>
            <option value="PC">PC</option>
            <option value="Imprimante">Imprimante</option>
            <option value="Serveur">Serveur</option>
            <option value="Routeur">Routeur</option>
          </select>
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marque</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={equipment.brand}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modèle</label>
          <input
            type="text"
            id="model"
            name="model"
            value={equipment.model}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700">Numéro de série</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={equipment.serialNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">Date d'achat</label>
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate"
            value={equipment.purchaseDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="warranty" className="block text-sm font-medium text-gray-700">Garantie (en mois)</label>
          <input
            type="number"
            id="warranty"
            name="warranty"
            value={equipment.warranty}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Ajouter l'équipement
        </button>
      </div>
    </form>
  );
};

export default AddEquipment;