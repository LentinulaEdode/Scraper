const products = [];

const createProduct = (product) => {
  products.push(product);
  return product;
};

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const updateProduct = (id, updatedProduct) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex] = { id, ...updatedProduct };
    return products[productIndex];
  }
  return null;
};

const deleteProduct = (id) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    const deletedProduct = products.splice(productIndex, 1);
    return deletedProduct[0];
  }
  return null;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

