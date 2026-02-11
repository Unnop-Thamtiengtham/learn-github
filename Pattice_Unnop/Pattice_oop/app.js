// create class
class User {
    // private
    #name
    #password
    static type = "ผู้ใช้งานระบบ"
    // parameter constuctor
    constructor (name, password){
        this.#name = name
        this.#password = password
    }
    // method 
    showDetail(){
        console.log(`Username ${this.#name} Password ${this.#password}`)
    }

    // setter method
    set Name (newName){
        this.#name = newName
    }

    // getter method
    get Name (){
        return this.#name
    }

    static showType (){
        console.log("I'm a User ")
    }
}

// create object
const user1 = new User("beem",123);
user1.Name = "Unnop"
User.showType()
console.log(User.type)
console.log(user1.Name)