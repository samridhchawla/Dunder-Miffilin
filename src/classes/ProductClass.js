class ProductClass{
    id;
    product_name;
    price;
    url;
    category;
    amount;
    tax = 0.1;
    constructor(id,product_name,price,url,category){
        this.id = id;
        this.product_name = product_name;
        this.price = price;
        this.url = url;
        this.category=category;
        this.amount = 1;
    }
    total(){
        return this.price * this.amount;
    }
    totalWtax(){
        return this.total() + (this.total()*this.tax);
    }
    get amount(){
        return parseInt(this.amount);
    }
    set amount(newAmount){
        this.amount = newAmount;
    }
    toObject(){
        return {
            id:this.id,
            product_name:this.product_name,
            price:this.price,
            amount:this.amount,
            url: this.url,
            category:this.category
        }
    }
}

export default ProductClass;