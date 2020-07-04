let IndexBasket = 0;
let burger: Burger[];
let bucket: Bucket[];
let drinks: Drinks[];
let user :User;

function AdminMenuAddBurger(name, price, value, indexArr) {
    let id = 1 ;
    burger[id] = new Burger(name, id, price, value, indexArr);
    
}

function FillingTheBasket(product , value) {

    bucket[IndexBasket] = new Bucket(product, value);
    IndexBasket++;

   
}

function OrderFormation() {
    let listArr = new Array[IndexBasket][2];
    for (let i = IndexBasket; i >= IndexBasket; i--) {
        listArr[i][0] = bucket[i].getProduct();
        listArr[i][1] = bucket[i].getValue();
    }
    return listArr;
}

function StartMenuBurger() {

    for (let i = 0; i < 1; i++) {
        
            burger[i] = new Burger(1, 1, 1, 1, 1);
        
    }
}

function StartMenuDrinks() {
    for (let i = 0; i < 1; i++) {
        drinks[i] = new Drinks(1, 1, 1);
    }   
}

function CreateUser(name, login, secondname, password, email, phone) {
   let id = 1;
   user = new User(login, name , secondname , password, email,phone ,id);
}

function Main() {
    StartMenuBurger();
    StartMenuDrinks();
}