// ARRAY METHOD
// map
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var maparr = arr.map(function (current) {
    return current * 2
});
console.log(maparr);

// fillter

var filterarr = arr.filter(function (current) {
    return current => 5;
})
console.log(filterarr);

// every
var everyarr = arr.every(function (current) {
    return current > 8
})
console.log(everyarr);

// some
var somearr = arr.some(function (current) {
    return current > 8
})
console.log(somearr);

// find
var findarr = arr.some(function (current) {
    return current == 0
})
console.log(findarr);

// forEach

var forarr = arr.forEach(function (current) {
    console.log([current]);

})
// reduce

var reducearr = arr.reduce(function (acc, current) {
    return acc + current
}, 30)
console.log(reducearr)



//call back
function callback1() {
    console.log("callback1")
    callback2()
}

callback1(callback2)

function callback2() {
    console.log("callback2")
}

//callback hell
main(main1);
function main(sub1) {
    setTimeout(function () {
        console.log("fuction 1");
        sub1(main2);
    }, 3000);
}


function main1(sub2) {
    setTimeout(function () {
        console.log("fuction 2");
        sub2(main3);
    }, 2000);

}
function main2(sub3) {
    setTimeout(function () {
        console.log("fuction 3");
        sub3(main4);
    }, 1000);

}
function main3(sub4) {
    setTimeout(function () {
        console.log("fuction 4");
        sub4(main5);

    }, 1000);

}
function main4(sub5) {
    setTimeout(function () {
        console.log("fuction 5");
        sub5(main6);
    }, 2000);

}
function main5(sub6) {
    setTimeout(function () {
        console.log("fuction 6");
        sub6();
    }, 3000);

}
function main6() {
    setTimeout(function () {
        console.log("fuction 7");

    }, 2000);

}


// promise 
function main1() {
    let Promise1 = new Promise(function (res, rej) {
        setTimeout(function () {
            rej("promise1");
        }, 2000)

    });
    return Promise1;
}
main1().then(function (res) {
    console.log(res, "success");
}).catch(function (rej) {
    console.log(rej, "reject");
});

function main2() {
    let Promise2 = new Promise(function (res1, rej1) {
        setTimeout(function () {
            res1("promise2");
        }, 2000)
    });
    return Promise2;
}
main2().then(function (res) {
    console.log(res, "success");
}).catch(function (rej) {
    console.log(rej, "reject");
});

// promise chaining

function chain1() {
    let Promise1 = new Promise(function (res1, rej) {
        setTimeout(function () {
            res1("promise chain 1 success");
        }, 3000)
    });
    return Promise1;
}
function chain2() {
    let Promise1 = new Promise(function (res1, rej1) {
        setTimeout(function () {
            res1("promise chain 2");
        }, 3000)
    });
    return Promise1;
}
chain1().then(function (res) {
    console.log(res, "success");
    chain2(res).then(function (res1) {
        console.log(res, res1, "success", "success");
    }).catch(function (rej) {
        console.log(rej, "reject", "reject");
    })
}).catch(function (rej) {
    console.log(rej, "reject");
});

// promise all
function all1() {
    let all1 = new Promise(function (res1, rej) {
        setTimeout(function () {
            res1("promise all1 success");
        }, 3000)
    });
    return all1;
}
function all2() {
    let all2 = new Promise(function (res1, rej) {
        setTimeout(function () {
            res1("promise all2 success");
        }, 3000)
    });
    return all2;
}
function all3() {
    let all3 = new Promise(function (res1, rej) {
        setTimeout(function () {
            res1("promise all3 success");
        }, 3000)
    });
    return all3;
}
function all4() {
    let all4 = new Promise(function (res1, rej) {
        setTimeout(function () {
            res1("promise all4 success");
        }, 3000)
    });
    return all4;
}
function all5() {
    let all5 = new Promise(function (res1, rej) {
        setTimeout(function () {
            res1("promise all5 success");
        }, 3000)
    });
    return all5;
}
Promise.all([all1(), all2(), all3(), all4(), all5()])
    .then(function (allsuccess) {
        console.log(allsuccess, "success");
    }).catch(function (error) {
        console.log(error, "error")
    })

// settimeout
setTimeout(function () {
    console.log("setTimeout")
}, 1000);

// setIntervel
var clear = setInterval(function () {
    console.log("setIntervel")
}, 2000);
setTimeout(function () {
    clearInterval(clear);
}, 8000)

//deep copy
var num = 10;
var a = num;
console.log(num, a);
a = 15;
console.log(num, a);

var ob1 = {
    name: "tamil",
    age: 18
}

var obj_2 = ob1;
console.log(ob1, "\n", obj_2);

obj_2.name = "sathish"
console.log(ob1, "\n", obj_2);

// SHALLOW COPY
var shallow_1 = {
    name: "tamil",
    age: 18
}

var shallow_2 = Object.assign({}, shallow_1);
console.log(shallow_1, "\n", shallow_2);

shallow_2.name = "sathish"
console.log(shallow_1, "\n", shallow_2);

// SPREAD OPERATOR- concatenate the two function

let g1 = [1, 23, 4, 5, 13]
let g2 = ['hai', 'hello']
let g3 = [...g1, ...g2]
console.log(g3);

// ASYNC AND AWAIT

let f1 = () => {
    console.log('1');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2');
            resolve({ a: '2' })
        }, 3000);
    })
}
let f2 = () => {
    console.log('3');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4');
            resolve()
        }, 3000);
    })
}

let f3 = () => {
    console.log('5');
}

let f4 = async () => {
    await f1()
    await f2()
    f3()
}
f4()

//async-await 

function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 23;
            let b = 12;
            console.log(a * b, "first");
            resolve();
        }, 3000);

    });
}

function second() {
    let a = 55;
    let b = 45;
    console.log(a - b);
}

async function third() {
    await first();
    second();
};
third();


// default parameter value

function addFunction(x, y = 20) {
    return z = x + y
}
console.log(addFunction(5));

// Function Rest Parameter -  to(...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

// string method

var stringMethods = "three string method includes in es6"
var ab = stringMethods.includes("string");
console.log(ab);
var ac = stringMethods.startsWith("three");
console.log(ac);
var ad = stringMethods.endsWith("es6");
console.log(ad);

// this // Class Constructor

class Rectangle {
    constructor(backgroundColor, border, opacity, width, height) {
        this.backgroundColor = backgroundColor;
        this.border = border;
        this.opacity = opacity;
        this.width = width;
        this.height = height;
        this.render();
    }

    get node() {
        if (this.rect) {
            return this.rect;
        } else {
            this.rect = document.createElement('div');
            document.body.append(this.rect);
            return this.rect;
        }
    }

    set backgroundColor(bgColor) {
        this.background = bgColor;
    }
    set border(border) {
        this.borderValue = border;
    }
    set opacity(opacity) {
        this.opacityValue = opacity;
    }
    set width(widthValue) {
        this.widthSize = widthValue;
    }
    set height(heightValue) {
        this.heightSize = heightValue;
    }

    render() {
        let node = this.node;
        node.style.backgroundColor = this.background;
        node.style.border = this.borderValue;
        node.style.opacity = this.opacityValue;
        node.style.width = this.widthSize;
        node.style.height = this.heightSize;
    }
}

let rectangle = new Rectangle('#ffff', '3px solid black', '0.5', '300px', '150px');
rectangle1 = new Rectangle('yellow', '3px solid skyblue', '1', '300px', '150px');



// Call & Apply & Bind

// call
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);


// apply

let nObj = {
    name: "Tony"
}

let pName = {
    name: "steve",
    say: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
pName.say.apply(nObj, [42]);

// bind

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {
        console.log(this.name);
    }
}
let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();


// Arrow Function --->this function only bottom calling work akum this function,Simplyfy function

let add = () => {
    return (a + b);
}
y = add(10, 10);
console.log(y);

// Destructuring

let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);


// Templete Literals

console.log(`the value is add ${y}`);

// local/Session Stroage

localStorage.setItem("skill", JSON.stringify(["HTML", "CSS", "JS"]));
localStorage.length;

sessionStorage.setItem("skill", JSON.stringify(["HTML", "CSS", "JS"]));
sessionStorage.length;


// let,const

var num = 0;
console.log(num++);
console.log(num++);
console.log(++num);
console.log(num);

let num1 = 0;

console.log(num1++);
console.log(num1++);
console.log(++num1);
console.log(num1);

const num2 = 0;

console.log(num2++);
console.log(num2++);
console.log(++num2);
console.log(num2);