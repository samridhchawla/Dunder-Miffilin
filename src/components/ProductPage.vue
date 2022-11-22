<template>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col">
            <h1>Product List</h1>
            <div class="row justify-content-start align-items-start g-2">
                <div class="col-6">
                    <div>
                        <nav>
                            <ul>
                                <li class="var_nav">
                                    <div class="link_bg"></div>
                                    <div class="link_title">
                                        <div class=icon> 
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <a href="#"><span>Search</span></a>
                                    </div>
                                </li>
                                <li class="var_nav">
                                    <div class="link_bg"></div>
                                    <div class="link_title">
                                        <div class=icon> 
                                            <i class="fa-solid fa-filter"></i>
                                        </div>
                                        <a href="#"><span>Sort</span></a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <table-compo @buy2="buybuy" :products="products"></table-compo>
                </div>
                <div class="col-6" id="addtable">
                    <h2>Added List</h2>
                    <table-compo :shopping="shoppingList" @total="total"></table-compo>
                    <br>
                    <hr>
                    <h2>Total Price: ${{sum}}</h2>
                    <div id="total" v-on:click="calTotal()" >
                        <a>Calculate Total Price</a>
                    </div>
                    <br>
                    <hr>
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
            sum:""
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
            if(this.shoppingList.has(product.id)){
                // if user clicked same product, slectedProduct will get a object by using pId and add amount number 
                selectedProduct = this.shoppingList.get(product.id);
                selectedProduct.amount = selectedProduct.amount + 1;
                selectedProduct.price=  Math.floor(product.price*selectedProduct.amount);
            }else{
                console.log(product)
                selectedProduct = new ProductClass(product.id,product.product_name,Math.floor(product.price),product.url,product.category)
            }
            this.shoppingList.set(product.id,selectedProduct);
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
        },
        calTotal(){
            let total = 0;
            this.shoppingList.forEach(function(vall){
                total= total +(vall.price+(vall.price*0.1))
            })
            return this.sum=Math.floor(total) ;
        }, 
        // del(idx){
        //     this.shoppingList.delete(idx);
        //     this.calTotal()
        // },
        total(total){
            this.sum=total;
        }
    },
    mounted(){
        this.loadProducts();
    }
}
</script>
<style scoped>
#addtable{
    padding-top: 5%;
}
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
nav{
    padding-top: 3%;
    padding-bottom: 3%;
}
ul
{
display: flex;
column-gap: 2vh;
margin:0px;
padding:0px;
list-style-type:none;
-webkit-backface-visibility: hidden; backface-visibility: hidden;  
}
.var_nav
{
position:relative;
background:#ccc; 
width:300px;
height:70px;
margin-bottom:5px;
}
.link_bg
{
 width:70px;
 height:70px;
 position:absolute;
 background:#E01B6A;
 color:#fff;
 z-index:2;
}
.link_bg i
{
 position:relative;
}
.link_title
{
position:absolute;
width:100%;
z-index:3;
color:#fff;
}
.link_title:hover .icon
{
-webkit-transform:rotate(360deg);
-moz-transform:rotate(360deg);
-o-transform:rotate(360deg);
-ms-transform:rotate(360deg);
transform:rotate(360deg);  
}
.var_nav:hover .link_bg
{
width:100%;
background:#E01B6A;
-webkit-transition: all 0.3s ease-in-out;
-moz-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
-ms-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;  
}
.var_nav:hover a
{
font-weight:bold;
-webkit-transition:all .5s ease-in-out;
-moz-transition:all .5s ease-in-out; 
-o-transition:all .5s ease-in-out; 
-ms-transition:all .5s ease-in-out;
 transition:all .5s ease-in-out;  
}
.icon
{
position:relative;
width:70px;
height:70px;
text-align:center;
color:#fff;
-webkit-transition:all .5s ease-in-out;
-moz-transition:all .5s ease-in-out; 
-o-transition:all .5s ease-in-out; 
-ms-transition:all .5s ease-in-out;   
float:left;
transition:all .5s ease-in-out;   
float:left;  
}
.icon i{top:22px;position:relative;}
nav a{
display:block;
position:absolute;
float:left;
font-family:arial;
color:#fff;
text-decoration:none;
width:100%;
height:70px;
text-align:center;
}
span
{
margin-top:25px;
display:block;
}
#total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 1em 2em;
        width: 300px;
        color: #333;
        /* color: whitesmoke; */
        font-size: 18px;
        font-weight: 700;
        background-image: linear-gradient(170deg, #659de6, #5abab8);
        border-radius: 50vh;
        transition: 0.3s;
    }
    #total:hover{
        cursor: pointer;
        transform: translateY(3px);
        text-decoration: none;
        box-shadow: 0 2px 0 #aaaaaa;
        background-image: linear-gradient(-170deg, #659de6, #5abab8);
    }
    #total a{
        text-decoration: none;
    }
</style>