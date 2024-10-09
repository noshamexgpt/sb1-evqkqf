import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AddClientProps = {
  addClient: (name: string) => void;
};

const AddClient: React.FC<AddClientProps> = ({ addClient }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addClient(name.trim());
      setName('');
      navigate('/inventory');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Ajouter un nouveau client</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
            Nom du client
          </label>
          <input
            type="text"
            id="clientName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Ajouter le client
        </button>
      </form>
    </div>
  );
};

export default AddClient;