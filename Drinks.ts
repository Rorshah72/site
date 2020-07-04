class Drinks {
    name: string;
    id: number;
    price: number;
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
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
}
