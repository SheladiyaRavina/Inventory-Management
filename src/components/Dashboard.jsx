import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryList from './InventoryList';
import { useInventory } from '../context/InventoryContext';

const Dashboard = () => {
  const { inventoryItems, deleteInventoryItem } = useInventory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSupplier, setFilterSupplier] = useState('');

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || item.category === filterCategory) &&
    (filterSupplier === '' || item.supplier === filterSupplier)
  );

  const categories = [...new Set(inventoryItems.map(item => item.category))];
  const suppliers = [...new Set(inventoryItems.map(item => item.supplier))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inventory Dashboard</h1>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search items..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={filterSupplier}
          onChange={(e) => setFilterSupplier(e.target.value)}
        >
          <option value="">All Suppliers</option>
          {suppliers.map(supplier => (
            <option key={supplier} value={supplier}>{supplier}</option>
          ))}
        </select>
        <Link 
          to="/add-item" 
          className="bg-orange-400 text-white p-2 rounded hover:bg-indigo-600 text-center flex items-center justify-center"
        >
          Add New Item
        </Link>
      </div>
      <InventoryList items={filteredItems} deleteInventoryItem={deleteInventoryItem} />
    </div>
  );
};

export default Dashboard;