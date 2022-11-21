<template>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col">
            <h1>Product List</h1>
            <div class="row justify-content-start align-items-start g-2">
                <div class="col-6">
                    <table-compo @buy2="buybuy" :products="products"></table-compo>
                </div>
                <div class="col-6">
                    <table-compo :shopping="shoppingList" ></table-compo>
                    <div v-on:click="sendMap()" id="sendMap">
                        <a>Add to  Shopping Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue';
import JsonService from '../services/JsonService.js';
import ProductClass from '../classes/ProductClass.js';

export default {
    name:'ProductPage',
    components:{
        TableCompo,
    },
    data(){
        return{
            products:new Array(),
            shoppingList:new Map(),
        }
    },
    methods:{
        loadProducts(){
            JsonService.getJson()
            .then((res)=>{
                this.products = res.data;
            })
            .catch((e)=>console.log(e));
        },
        buybuy(idx){
            let product = this.products[idx];
            // product is selected object
            let selectedProduct = null;
            if(this.shoppingList.has(product.pId)){
                // if user clicked same product, slectedProduct will get a object by using pId and add amount number 
                selectedProduct = this.shoppingList.get(product.pId);
                selectedProduct.amount = selectedProduct.amount + 1;
                selectedProduct.price=  Math.floor(product.price*selectedProduct.amount);
            }else{
                selectedProduct = new ProductClass(product.pId,product.pName,Math.floor(product.price))
            }
            this.shoppingList.set(product.pId,selectedProduct);
        },
        sendMap(){
            // This emit will send a this.shoppingList to parent(App.vue) to display at ShoppingPageVue
            this.$emit('mapmap',this.shoppingList);
            this.alertMsg()
        },
        alertMsg(){
            // You can know how many items have you added 
            let mapSize = this.shoppingList.size;
            alert(mapSize+" "+"Items was added to Shopping Cart");
        }
    },
    mounted(){
        this.loadProducts();
    }
}
</script>
<style scoped>
#sendMap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1em 2em;
    width: 300px;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    background-image: linear-gradient(170deg, #659de6, #5abab8);
     border-radius: 50vh;
    transition: 0.3s;
}
#sendMap:hover{
    cursor: pointer;
    transform: translateY(3px);
    text-decoration: none;
    box-shadow: 0 2px 0 #aaaaaa;
    background-image: linear-gradient(-170deg, #659de6, #5abab8);
}
a{
    text-decoration: none;
}
</style>