function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  
    this.speak = function () {
      if (this.age < 1) {
        return "Тяф";
      } else if (this.age >= 1 && this.age <= 3) {
        return "Гав";
      } else {
        return "Ррр";
      }
    };
  }
  
  const dog1 = new Dog("Рекс", "Лабрадор", 2);
  const dog2 = new Dog("Барон", "Бульдог", 0.5);
  const dog3 = new Dog("Макс", "Німецька вівчарка", 4);
  
  console.log(`${dog1.name} (${dog1.breed}, ${dog1.age} роки): ${dog1.speak()}`);
  console.log(`${dog2.name} (${dog2.breed}, ${dog2.age} років): ${dog2.speak()}`);
  console.log(`${dog3.name} (${dog3.breed}, ${dog3.age} років): ${dog3.speak()}`);
  