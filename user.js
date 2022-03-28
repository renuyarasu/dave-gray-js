export default class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet(){
        return `Hi my name is ${this.name}`;
    }
}