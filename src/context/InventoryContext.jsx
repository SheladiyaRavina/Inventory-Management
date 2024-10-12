import React, { createContext, useState, useContext } from 'react';

const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Laptop', quantity: 50, category: 'Electronics', supplier: 'TechCorp' },
    { id: 2, name: 'T-shirt', quantity: 100, category: 'Clothing', supplier: 'FashionInc' },
    { id: 3, name: 'Coffee Beans', quantity: 5, category: 'Food', supplier: 'BeanBoost' },
    { id: 4, name: 'Smartphone', quantity: 30, category: 'Electronics', supplier: 'MobileTech' },
    { id: 5, name: 'Desk Chair', quantity: 25, category: 'Furniture', supplier: 'OfficePro' },
    { id: 6, name: 'Notebook', quantity: 200, category: 'Stationery', supplier: 'PaperCo' },
    { id: 7, name: 'Water Bottle', quantity: 150, category: 'Accessories', supplier: 'EcoGoods' },
    { id: 8, name: 'Wireless Mouse', quantity: 10, category: 'Electronics', supplier: 'TechCorp' },
    { id: 9, name: 'Protein Bars', quantity: 80, category: 'Food', supplier: 'HealthySnacks' },
    { id: 10, name: 'Backpack', quantity: 60, category: 'Accessories', supplier: 'BagMasters' }
  ]);

  const addInventoryItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setInventoryItems([...inventoryItems, itemWithId]);
  };

  const updateInventoryItem = (updatedItem) => {
    setInventoryItems(inventoryItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
  };

  const deleteInventoryItem = (id) => {
    setInventoryItems(inventoryItems.filter(item => item.id !== id));
  };

  const getInventoryItem = (id) => {
    return inventoryItems.find(item => item.id === id);
  };

  return (
    <InventoryContext.Provider value={{
      inventoryItems,
      addInventoryItem,
      updateInventoryItem,
      deleteInventoryItem,
      getInventoryItem
    }}>
      {children}
    </InventoryContext.Provider>
  );
};