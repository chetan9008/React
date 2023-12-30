function classes() {

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        display() {
            console.log(`Name is ${this.name}`);
            console.log(`Age is ${this.age}`);
        }
    }

    class Admission extends Student {
        constructor(n, a, s) {
            super(n, a);
            this.status = s;
        }
        result() {
            if (this.status)
                console.log(`${this.name} Admission is completed`);
            else
                console.log(`${this.name} Admission is not completed`);
        }
    }

    // let chetan = new Student("chetan", "21");
    // chetan.display();

    let someone = new Admission("chetan", "21", true);
    someone.display();
    someone.result();

}

function arrowFunction() {
    let arrowFun = () => {
        return "arrow";
    }

    let arrowFunction = () => "arrow";

    let arrowFunction1 = name => "Hello " + name;
    let string = arrowFunction1("chetan");
    console.log(string);
}

// arrowFunction();

let mapFunction = () => {
    let array = [1, 2, 3];

    let anotherArray = array.map((value) => value + 1);

    console.log(anotherArray);
}
// mapFunction();

let destructing = () => {
    let array = ['chetan', '27', 'bsc'];

    // let [name,roll,course] = array;

    // console.log(course);

    let object = {
        name: 'chetan',
        course: 'bsc'
    }

    let { name, course } = object;

    console.log(course);
}
// destructing();

function setTimeoutExample() {
    function Experiment() {
        setTimeout(() => {
            console.log("hello");
        }, 5000);
    }
    Experiment();
    Experiment();
    Experiment();
    Experiment();
}
// setTimeoutExample();

function APIfetch() {
    async function getData() {
        try {

            let result = await fetch('https://api.github.com/users');
            let data = await result.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    getData();
}
// APIfetch();

function truthFalse() {
    let x = 0, y = 1;
    if (y && x)
        console.log('truth');
    else
        console.log('false');

}
truthFalse();