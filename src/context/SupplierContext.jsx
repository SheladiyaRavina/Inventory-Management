import React, { createContext, useState, useContext } from 'react';

const SupplierContext = createContext();

export const useSupplier = () => useContext(SupplierContext);

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'TechCorp', contact: 'john@techcorp.com', items: ['Laptop', 'Wireless Mouse'] },
    { id: 2, name: 'FashionInc', contact: 'sarah@fashioninc.com', items: ['T-shirt'] },
    { id: 3, name: 'BeanBoost', contact: 'mike@beanboost.com', items: ['Coffee Beans'] },
  ]);

  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { ...newSupplier, id: Date.now() }]);
  };

  const updateSupplier = (updatedSupplier) => {
    setSuppliers(suppliers.map(supplier => 
      supplier.id === updatedSupplier.id ? updatedSupplier : supplier
    ));
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  const getSupplier = (id) => {
    return suppliers.find(supplier => supplier.id === id);
  };

  return (
    <SupplierContext.Provider value={{
      suppliers,
      addSupplier,
      updateSupplier,
      deleteSupplier,
      getSupplier
    }}>
      {children}
    </SupplierContext.Provider>
  );
};