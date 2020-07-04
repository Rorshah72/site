
class  {
    name;
    id;
    price;
    value;
    ingredient = new Array(40);
    constructor(name, id, price, value, n) {
        for (i = 0; i < value; i++) {
            ingredient[i] = new Ingredient(1, 1, 1, 1)
        }
        this.name = name;
        this.id = id;
        this.price = price;
        this.value = value;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;

    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setIngredient(IngredientIndex) {
        ingredient[value - 1] = new Ingredient();
    }

}

