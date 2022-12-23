const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];
// console.table(friends);

const nameToFind = "Poly";
// ищем поли циклом
/* for (let friend of friends) {
  console.log(friend);
  if (friend.name === nameToFind) {
    console.log("yes");
    break;
  }
} */

//сделаем функцией
/* const findFriendName = function (friendsList, name) {
  for (let friend of friendsList) {
    if (friend.name === name) {
      return "yes";
    }
  }
  return "no";
};
console.log(findFriendName(friends, "Kiwi"));
console.log(findFriendName(friends, "Tom")); */

// получаем имz одного из друзей
/* const findFriendName = function (friendsList, name) {
  for (let friend of friendsList) {
    if (friend.name === name) {
      return "yes";
    }
  }
  return "no";
}; */

// получаем имена  друзей online

/* const getAllNames = function (friendsList) {
  const names = [];
  for (const friend of friendsList) {
    console.log(friend);

    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends)); */

// получаем имена  друзей online

const getAllNames = function (friendsList) {
  const names = [];
  for (const friend of friendsList) {
    console.log(friend);
    if (friend.online) {
      names.push(friend.name);
    }
  }
  return names;
};

console.log(getAllNames(friends));
