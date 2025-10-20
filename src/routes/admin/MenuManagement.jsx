import React, { useState } from 'react';
import { products } from '../../data/products';

const MenuManagement = () => {
  const [productList, setProductList] = useState(products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Pizza', 'Pasta', 'Sushi', 'Bebidas'];

  const filteredProducts = productList.filter(product => {
    const matchesSearch = product.ItemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.ItemIngredients.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.Category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setProductList(prev => prev.filter(product => product.id !== productId));
    }
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
    setShowAddForm(false);
  };

  const handleSaveEdit = () => {
    if (!editingProduct.ItemName || !editingProduct.ItemPrice) {
      alert('Nombre y precio son obligatorios');
      return;
    }

    setProductList(prev => 
      prev.map(product => 
        product.id === editingProduct.id ? editingProduct : product
      )
    );
    setEditingProduct(null);
  };

  const handleAddNew = () => {
    const newProduct = {
      id: `new-${Date.now()}`,
      ItemName: '',
      ItemIngredients: '',
      ItemPrice: 0,
      Category: 'Pizza',
      ItemImg: '',
      attributes: []
    };
    setEditingProduct(newProduct);
    setShowAddForm(true);
  };

  const handleSaveNew = () => {
    if (!editingProduct.ItemName || !editingProduct.ItemPrice) {
      alert('Nombre y precio son obligatorios');
      return;
    }

    setProductList(prev => [...prev, editingProduct]);
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '15px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#2c3e50',
      margin: 0
    },
    controls: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    searchInput: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      minWidth: '200px'
    },
    select: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: 'white'
    },
    addButton: {
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    table: {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    tableHeader: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      fontWeight: '600',
      color: '#495057',
      borderBottom: '1px solid #dee2e6'
    },
    tableRow: {
      borderBottom: '1px solid #dee2e6'
    },
    tableCell: {
      padding: '15px',
      verticalAlign: 'top'
    },
    productImage: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '6px'
    },
    productName: {
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '4px'
    },
    productCategory: {
      fontSize: '12px',
      color: '#6c757d',
      backgroundColor: '#e9ecef',
      padding: '2px 8px',
      borderRadius: '12px',
      display: 'inline-block'
    },
    productPrice: {
      fontWeight: '600',
      color: '#28a745',
      fontSize: '16px'
    },
    actionButton: {
      padding: '6px 12px',
      margin: '0 4px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: '500'
    },
    editButton: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflowY: 'auto'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#2c3e50',
      margin: 0
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#6c757d'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: '500',
      color: '#495057'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      minHeight: '80px',
      resize: 'vertical',
      boxSizing: 'border-box'
    },
    modalButtons: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end',
      marginTop: '20px'
    },
    saveButton: {
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    cancelButton: {
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px',
      color: '#6c757d'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Gestión del Menú</h1>
        <div style={styles.controls}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Todas las categorías' : cat}
              </option>
            ))}
          </select>
          <button onClick={handleAddNew} style={styles.addButton}>
            + Agregar Producto
          </button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={styles.emptyState}>
          <p>No se encontraron productos</p>
        </div>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Imagen</th>
              <th style={styles.tableHeader}>Producto</th>
              <th style={styles.tableHeader}>Categoría</th>
              <th style={styles.tableHeader}>Precio</th>
              <th style={styles.tableHeader}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <img 
                    src={product.ItemImg} 
                    alt={product.ItemName}
                    style={styles.productImage}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMCAyMEg0MFY0MEgyMFYyMFoiIGZpbGw9IiNEOUQ5RDkiLz4KPC9zdmc+';
                    }}
                  />
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.productName}>{product.ItemName}</div>
                  <div style={{ fontSize: '12px', color: '#6c757d', marginTop: '4px' }}>
                    {product.ItemIngredients ? product.ItemIngredients.substring(0, 50) + '...' : 'Sin descripción'}
                  </div>
                </td>
                <td style={styles.tableCell}>
                  <span style={styles.productCategory}>{product.Category}</span>
                </td>
                <td style={styles.tableCell}>
                  <span style={styles.productPrice}>${product.ItemPrice.toLocaleString()}</span>
                </td>
                <td style={styles.tableCell}>
                  <button
                    onClick={() => handleEdit(product)}
                    style={{...styles.actionButton, ...styles.editButton}}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{...styles.actionButton, ...styles.deleteButton}}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingProduct && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                {showAddForm ? 'Agregar Nuevo Producto' : 'Editar Producto'}
              </h2>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setShowAddForm(false);
                }}
                style={styles.closeButton}
              >
                ×
              </button>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre del Producto *</label>
              <input
                type="text"
                value={editingProduct.ItemName}
                onChange={(e) => setEditingProduct({
                  ...editingProduct,
                  ItemName: e.target.value
                })}
                style={styles.input}
                placeholder="Ej: Pizza Margherita"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Descripción/Ingredientes</label>
              <textarea
                value={editingProduct.ItemIngredients}
                onChange={(e) => setEditingProduct({
                  ...editingProduct,
                  ItemIngredients: e.target.value
                })}
                style={styles.textarea}
                placeholder="Describe los ingredientes del producto..."
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Precio (CLP) *</label>
              <input
                type="number"
                value={editingProduct.ItemPrice}
                onChange={(e) => setEditingProduct({
                  ...editingProduct,
                  ItemPrice: parseInt(e.target.value) || 0
                })}
                style={styles.input}
                placeholder="12000"
                min="0"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Categoría</label>
              <select
                value={editingProduct.Category}
                onChange={(e) => setEditingProduct({
                  ...editingProduct,
                  Category: e.target.value
                })}
                style={styles.input}
              >
                <option value="Pizza">Pizza</option>
                <option value="Pasta">Pasta</option>
                <option value="Sushi">Sushi</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>URL de Imagen</label>
              <input
                type="url"
                value={editingProduct.ItemImg}
                onChange={(e) => setEditingProduct({
                  ...editingProduct,
                  ItemImg: e.target.value
                })}
                style={styles.input}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>

            <div style={styles.modalButtons}>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setShowAddForm(false);
                }}
                style={styles.cancelButton}
              >
                Cancelar
              </button>
              <button
                onClick={showAddForm ? handleSaveNew : handleSaveEdit}
                style={styles.saveButton}
              >
                {showAddForm ? 'Agregar' : 'Guardar Cambios'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;
