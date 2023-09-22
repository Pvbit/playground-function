function createUser(users, user) {
  // se usuários não exister
  if (!users) {
    return "Users not found";
  }
  // se usuários não for array
  if (!Array.isArray(users)) {
    return "Users not is array";
  }
  // se usuário for diferente de uma objeto
  if (typeof user !== "object") {
    return "User is not object";
  }
  const newId = users.length + 1;
  const newUser = {
    id: newId,
    ...user,
  };

  users.push(newUser);
  return "Create sucess";
}

function updateUserById(users, id, userUpdate) {
  // se os usuários não existerem
  if (!users) {
    return "Users not found";
  }
  // se os usuários não forem um array
  if (!Array.isArray(users)) {
    return "Users not is array";
  }
  // se id não for um número
  if (typeof id !== "number") {
    return "Id not number";
  }
  // se userUpdate for diferente de uma objeto
  if (typeof userUpdate !== "object") {
    return "User is not object";
  }
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if (element.id === id) {
      users[index] = {
        id,
        ...userUpdate,
      };
      return "User update sucess";
    }
  }
  return "Not Found";
}

function deleteUserById(users, id) {
  const newUsers = [];

  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if (element.id !== id) {
      newUsers.push(element);
    }
  }
  users.length = 0;
  users.push([...newUsers]);
  return "user delete";
}

module.exports = {
  createUser,
  updateUserById,
  deleteUserById,
};
