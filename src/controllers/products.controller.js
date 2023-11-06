
const products = [
    {
      id: 1,
      name: 'Aceitunas rellenas LA ESPAÑOLA, pack 3x50g',
      category: 'Aceitunas y encurtidos',
      price: 3.25,
      quantity: 10,
    },
    {
        id: 2,
        name: 'Aceitunas rellenas de anchoa LA ESPAÑOLA, lata 160g',
        category: 'Aceitunas y encurtidos',
        price: 2.05,
        quantity: 8,
      },
      {
        id: 3,
        name: 'Aceitunas negras sin hueso EROSKI, lata 150g',
        category: 'Aceitunas y encurtidos',
        price: 1.00,
        quantity: 12,
      },
      {
        id: 4,
        name: 'Pimientos del Piquillo en ConservaPepinillos pequeños EROSKI, frasco 190g',
        category: 'Aceitunas y encurtidos',
        price: 1.24,
        quantity: 6,
      },
      {
        id: 5,
        name: 'Mix de pepinillos-cebolletas RIOVERDE, frasco 380g',
        category: 'Aceitunas y encurtidos',
        price: 2.15,
        quantity: 7,
      },
      {
        id: 6,
        name: 'Cebollitas agridulces RIOVERDE, frasco 225g',
        category: 'Aceitunas y encurtidos',
        price: 1.95,
        quantity: 4,
      },
      {
        id: 7,
        name: 'Cocktail encurtidos EROSKI, frasco 500g',
        category: 'Aceitunas y encurtidos',
        price: 2.99,
        quantity: 9,
      },
      {
        id: 8,
        name: 'Guindillas EROSKI, frasco 60g',
        category: 'Aceitunas y encurtidos',
        price: 1.99,
        quantity: 11,
      },
  ];
  

  const getAllProducts = (req, res) => {
    res.json(products);
  };
  

  const createProduct = (req, res) => {
    const { name, category, price, quantity } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      category,
      price,
      quantity,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
 
  const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((product) => product.id === id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  };
  

  const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, category, price, quantity } = req.body;
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products[productIndex] = { id, name, category, price, quantity };
      res.json(products[productIndex]);
    } else {
      res.status(404).json({ error: 'No se ha encontrado el producto' });
    }
  };

  const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      res.json({ message: 'Producto eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  };
  
  module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
  };