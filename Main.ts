let IndexBasket: number = 0;
let IndexIngredient: number[];
let burger: Burger[];
let bucket: Bucket[];
let drinks: Drinks[];
let ingredients: Ingredient[];
let user :User;

function AdminMenuAddBurger(name, price, value, indexIngredient) {
    let id = 1 ;
    burger[id] = new Burger(name, id, price, value, indexIngredient);
    
}

function AdminMenuAddIngredients(name, price) {
    let id = 1;
    ingredients[id] = new Ingredient(name,price,id);
}

function FillingTheBasket(product , value) {

    bucket[IndexBasket] = new Bucket(product, value);
    IndexBasket++;

   
}

function OrderFormation() {
    let listArr = new Array[IndexBasket][2];
    if (IndexBasket > 0) {
        for (let i = 0; i < IndexBasket; i++) {
            listArr[i][0] = bucket[i].getProduct();
            listArr[i][1] = bucket[i].getValue();
        }
        return listArr;
    }
    else return 0;
}

function BurgerConstructor(name,price,value,indexIngredient) {
    let id = 1;
    burger[id] = new Burger(name, id, price, value, indexIngredient);
    burger[id].setRole(1);
}

function AddPhoto(indexPhoto, id) {
    burger[id].setIndexPhoto(indexPhoto);
}

function ReadPhoto(id) {
   return burger[id].getIndexPhoto();
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

function StartMenuIngredients() {
    for (let i = 0; i < 1; i++) {
        ingredients[i] = new Ingredient(1, 1 ,1 );
    }
}

function CreateUser(name, login, secondname, password, email, phone) {
   let id = 1;
   user = new User(login, name , secondname , password, email,phone ,id);
}

function AddIngredientToBurger(id) {
    IndexIngredient.push(id);
}

function RemoveIngredientOfBurger(id) {
    IndexIngredient[id] = null;
}

function Main() {
    StartMenuBurger();
    StartMenuDrinks();
}