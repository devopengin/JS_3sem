// первое задание
let person = {
    age: 25,
    greet(){
        return "Hello user";
    },
    ageAfterYears(){
        return "Текущий возраст" + " " + this.age;
    }
}

console.log(person.greet())
console.log(person.ageAfterYears())

// второе задание

// let car = {
//     model: "Porsche",
//     year: 2006,
//     getInfo(){
//         return "Модель машины: " + this.model + " " + "Год производста: " + this.year;
//     }
// }

// console.log(car.getInfo())


// третье задание

function Block(title, author){
    this.title = title;
    this.author = author;

    this.getTitle = function() {
        return this.title;
    };

    this.getAuthor = function() {
        return this.author;
    };
}

let newObj = new Block("Пути", "Путин");

console.log(newObj.getTitle());
console.log(newObj.getAuthor());

// четвертое задание

let team = {
    members: [
        {name: "Путин1", age: 25},
        {name: "Путин2", age: 20},
        {name: "Путин3", age: 19},
    ],
    
    getInfo() {
        this.members.forEach(member => {
            console.log(`${member.name}, возраст: ${member.age}`);
        });
    }
};

team.getInfo();

// пятое задание

const counter = (function() {
    let count = 0;
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  })();
    
    console.log(counter.increment()); // 1
    console.log(counter.increment()); // 2
    console.log(counter.decrement()); // 1
    console.log(counter.getCount()); // 1

//шестое задание

let item = {
    price:400 
}
Object.defineProperty(item, "price", {
    writable: true,
    configurable:true
  });
    
item.price = 200;
console.log(item.price)

Object.defineProperty(item, "price", {
    writable: false,
    configurable:false
  });

item.price = 200000
console.log(item.price)

// седьмое задание

let circle = {
  _radius: 1,
  get radiusOfcircle() {
    return Math.PI * (this._radius ** 2);
  },

  get radius() {
    return this._radius;
  },

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("Радиус должен быть положительным числом.");
    }
  },
};
console.log(circle.radius);  // 1 
circle.radius = 5;
console.log(circle.radius);  // 5 
console.log(circle.radiusOfcircle);
circle.radius = -3; 

// восьмое задание

let car = {
    make:"Japan",
    model:"pytipyti",
    year:2006
}

Object.defineProperties(car, {
    name: { 
        writable: true,
        configurable:true
     },
    model: {
         writable: true,
         configurable:true
     },
     year: {
        writable: true,
        configurable:true
    }
  });

  car.make = "Ocean";
  delete car.make
  console.log(car)

Object.defineProperties(car, {
    make: { 
        writable: false,
        configurable:false
     },
    model: {
         writable: false,
         configurable:false
     },
     year: {
        writable: false,
        configurable:false
    }
  });


  car.year = 2010
  delete car.year
  car.model = "ptptptpt"

  console.log(car)

// девятое задание
let arr = [1, 2, 3];

Object.defineProperty(arr, 'sum', {
    get: function() {
        let sum = 0;
        this.forEach(function(num) {
            sum += num;
        });
        return sum;
    },
    configurable: false
});

console.log(arr.sum); // 6

arr.sum = 10; 
console.log(arr.sum); // 6

// десятое задание

let rectangle = {
    _width: 100,
    _height:150,
    get squareOfrectangle() {
      return this._height*this._width;
    },
  
    get width() {
      return this._width;
    },
  
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.log("Длина должна быть больше 0");
      }
    },


    get height(){
        return this._height;
    },

    set height(value){
        if (value>0){
            this._height = value;
        }
        else
        {
            console.log("Высота должна быть больше 0")
        }
    }
  };
  console.log(rectangle.width);  // 1 
  rectangle.width = -1;

  console.log(rectangle.height);  // 1 
  rectangle.height = -1;

  rectangle.height = 400;
  console.log(rectangle.height); 

// одиннадцатое задание 

let user = {
    firstName: "John",
    lastName: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  user.fullName = "Jyci Pyci";
  
  console.log(user.fullName)
  console.log(user.name);
  console.log(user.surname);
  

  
 

