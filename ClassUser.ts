class User {
    login:string;
    name: string;
    secondname: string;
    role: number = 1;
    password: string;
    email: string;
    phone: string;
    id: number;
    constructor(login, name, secondname, password, email, phone,id) {
        this.name = name;
        this.login = login;
        this.secondname = secondname;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.id = id;

    }
    
        getName() {
        return this.name;
    }
        setName(name) {
        this.name = name;
    }
        getLogin() {
        return this.login;
    }
        setLogin(login) {
        this.login = login;
    }
        getSecondname() {
        return this.secondname;
    }
        setSecondname(secondname) {
        this.secondname = secondname;
    }
         getPassword() {
        return this.password;
    }
        setPassword(password) {
        this.password = password;
    }
        getEmail() {
        return this.email;
    }
        setEmail(email) {
        this.email = email;
    }
        getPhone() {
        return this.phone;
       
    }
        setPhone(phone) {
        this.phone = phone;
    }
        getRole() {
        return this.role;
    }
        setRole(role) {
        this.role = role;
    }
        setId(id) {
        this.id = id;
    }
        getId() {
        return this.id;

    }



}