// create class
class User {
    // private
    #name
    #password
    // parameter constuctor
    constructor (name, password){
        this.#name = name
        this.#password = password
    }
    // method 
    showDetail(){
        console.log(`Username ${this.#name} Password ${this.#password}`)
    }
}

// create object
const user1 = new User("beem",123);
user1.showDetail()