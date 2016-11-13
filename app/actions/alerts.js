function changeName(id, newName) {
  return {
    type: 'CHANGE_NAME',
    name: newName,
    id,
  };
}

export { changeName };
