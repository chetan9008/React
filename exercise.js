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

function arrowFunction()
{
    let arrowFun = ()=>{
        return "arrow";
    }

    let arrowFunction = ()=> "arrow";

    let arrowFunction1 = name => "Hello " + name;
    let string = arrowFunction1("chetan");
    console.log(string);
}

arrowFunction();