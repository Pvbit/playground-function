function createProduct(products, product) {
  // se Produtos não existerem
  if (!products) {
    return "Products not found";
  }
  // se produtos não forem um array
  if (!Array.isArray(products)) {
    return "Products not is array";
  }
  // se produto for diferente de uma objeto
  if (typeof product !== "object") {
    return "Product is not object";
  }
  const newId = product.length + 1;
  const newProduct = {
    id: newId,
    ...product,
  };

  product.push(newProduct);
  return "Create sucess";
}

function updateProductById(products, id, productUpdate) {
  // se os produtos não existerem
  if (!products) {
    return "products not found";
  }
  // se os produtos não forem um array
  if (!Array.isArray(products)) {
    return "products not is array";
  }
  // se id não for um número
  if (typeof id !== "number") {
    return "Id not number";
  }
  // se productUpdate for diferente de uma objeto
  if (typeof productUpdate !== "object") {
    return "Product is not object";
  }
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.id === id) {
      products[index] = {
        id,
        ...productUpdate,
      };
      return element;
    }
  }
  return "Not Found";
}

function deleteProductById(products, id) {
  const newproducts = [];

  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.id !== id) {
      newproducts.push(element);
    }
  }
  products.length = 0;
  products.push([...newproducts]);
  return "Product delete";
}

module.exports = {
  createProduct,
  updateProductById,
  deleteProductById,
};
