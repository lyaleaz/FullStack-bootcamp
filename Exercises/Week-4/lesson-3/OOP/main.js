const Homan = function (name, id) {
  const _nationID = id;
  const getID = () => _nationID;
  const introduce = () => console.log(`Hi,I'm${name}`);
  return {
    name: name,
    getID: getID,
    introduce: introduce,
  };
};

class Human {
  constructor(name, id) {
    this.n = name;
    this.i = id;
  }
}
const h = new Human("Lyale", 123456789);

console.log(h);
