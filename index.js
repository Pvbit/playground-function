const products = require("./Data/produtos");
const users = require("./Data/usuarios");

const { getAll, getById } = require("./Function/scripts");

const {
  createProduct,
  updateProductById,
  deleteProductById,
} = require("./Function/product");

const {
  createUser,
  updateUserById,
  deleteUserById,
} = require("./Function/user");

const allUsers = getAll(users);
const findUser = getById(users, 12);
const createNewUser = createUser(users, {
  name: "Paulo Santos",
  email: "ps01@gmail.com",
  password: "1234_word",
});
const updateUser = updateUserById(users, 30, {
  name: "Vitor Santos",
  email: "pvsantos01@gmail.com",
  password: "1234_excel",
});
const deleteUser = deleteUserById(users, 31);
console.log(deleteUser, allUsers);
