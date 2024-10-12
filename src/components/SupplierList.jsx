import React from 'react';
import { Link } from 'react-router-dom';
import { useSupplier } from '../context/SupplierContext';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SupplierList = () => {
  const { suppliers, deleteSupplier } = useSupplier();

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete supplier "${name}"?`)) {
      deleteSupplier(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Supplier Management</h1>
      <Link 
        to="/add-supplier" 
        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block mb-4"
      >
        Add New Supplier
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Contact</th>
              <th className="py-3 px-6 text-left">Items Supplied</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{supplier.name}</td>
                <td className="py-3 px-6 text-left">{supplier.contact}</td>
                <td className="py-3 px-6 text-left">{supplier.items.join(', ')}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link 
                      to={`/edit-supplier/${supplier.id}`} 
                      className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                    >
                      <FaEdit size={16} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(supplier.id, supplier.name)} 
                      className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;