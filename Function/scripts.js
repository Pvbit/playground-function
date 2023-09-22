function getAll(data) {
  if (!data) {
    return "Data not found";
  }
  if (!Array.isArray(data)) {
    return "Data not is array";
  }

  return data;
}

function getById(data, id) {
  // se data não exister
  if (!data) {
    return "Data not found";
  }
  // se data não for array
  if (!Array.isArray(data)) {
    return "Data not is array";
  }
  // se id não for um número
  if (typeof id !== "number") {
    return "Id not number";
  }
  // se data for um array e Id um número, busca Id
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // se Id do elemento for = do parâmetro
    if (element.id === id) {
      return element; // retorna o elemento
    }
  }
  return "Element is not exist";
}

module.exports = {
  getAll,
  getById,
};
