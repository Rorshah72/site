class Bucket {
    product: string;
    value: number;

    constructor(product, value) {
            this.product = product;
            this.value = value;        
    }

        getProduct() {
        return this.product;
    }
        getValue() {
        return this.value;
    }
        setValue(value) {
        this.value = value;
    }
        setProduct(product) {
        this.product = product;
    }
}
