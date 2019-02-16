class BaseUser {
    constructor(id) {
        this.id = id;
    }

    get userId() {
        return this.id;
    }
}

class User extends BaseUser{
    constructor(name= "User", id = -1) {
        super(id);
        this.name = name;
    }

    sayHello() {
        return `Hello ${this.name}, user id: ${super.userId}`;
    }

    static about() {
        return 'This is a static function';
    }
}


const user = new User("John", 200);

console.log(user.sayHello())

console.log( User.about() )