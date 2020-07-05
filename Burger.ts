
class Burger {
    name: string;
    id: number;
    price: number;
    value: number;
    indexPhoto: string;
    role: number = 0;
    ingredientIndex: number[];
    constructor(name, id, price, value, index ){
        for (let i = 0; i < value; i++) {
            this.ingredientIndex[i] = index[i];
        }
        this.name = name;
        this.id = id;
        this.price = price;
        this.value = value;
        this.indexPhoto = "111111111";
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
        setIngredientIndex(IngredientIndex) {
        this.ingredientIndex[this.value - 1] = IngredientIndex[this.value - 1];
    }
        getIngredientIndex() {
        return this.ingredientIndex.join();
    }
        setRole(role) {
        this.role = role;
    }
        getRole() {
        return this.role;
    }
        setIndexPhoto(indexPhoto) {
        this.indexPhoto = indexPhoto;
    }
        getIndexPhoto() {
        return this.indexPhoto;
    }
    
}


