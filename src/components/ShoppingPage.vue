<template>
    <div class="table-responsive"> 
        <h1>Shopping Cart</h1>
            <table class="table table-striped
            table-hover	
            table-borderless
            table-primary
            align-middle">
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Item Image</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Subtotal</th>
                        <th>Total(Tax10%)</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="(shop,idx) in sendFinall" :key="idx" class="table-primary">
                        <td>{{shop[1].pId}}</td>
                        <td><img src="../img/pic-01.jpg"></td>
                        <td>{{shop[1].pName}}</td>
                        <td>{{shop[1].amount}}</td>
                        <td>${{shop[1].price}}</td>
                        <td>${{(shop[1].price*0.1)+shop[1].price}}</td>
                        <td id="dele" @click="dele(shop[0])">
                        <a>X</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <br><hr><br>
             <h2>Total Price: ${{sum2}}</h2>
             <br>
             <div id="total" v-on:click="calTotal2()" >
                 <a>Calculate Total Price</a>
            </div>
    </div>
</template>
<script>

export default {
    name:'ShoppingPage',
    props:['sendFinall'],
    // sendFinall is map of added products 
    data(){
        return{
            sum2:""
        }
    },
    methods:{
        dele(idx){
            // sendFinall is map, so you can delete item by using delete.
            // If you deleted item, then total price will change, so i use this.calTotal2() to calculate again 
            this.sendFinall.delete(idx);
            this.calTotal2()
        },
        calTotal2(){
            let total2 = 0;
            this.sendFinall.forEach(function(vall){
                total2= total2 +(vall.price+(vall.price*0.1))
            })
            return this.sum2=Math.floor(total2);
        },         
    },
}
</script>
<style scoped>
 img{
        width: 15vh;
    }
    section{
        display: flex;
        flex-wrap: wrap;
        row-gap: 2vh;
        column-gap: 1vh;
    }
    article{
        width: 23%;
        background-color:rgb(240, 237, 237)
    }
    h3{
        font-size: 13px;
    }
    #dele{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        padding: 1em 2em;
        color: #333;
        font-size: 12px;
        font-weight: 700;
        background-color: #cccccc;
        box-shadow: 0 5px 0 #aaaaaa;
        transition: 0.3s;
    }
    #dele:hover{
        transform: translateY(3px);
        text-decoration: none;
        box-shadow: 0 2px 0 #aaaaaa;
    }
    #total{
        display: flex;
        /* justify-content: space-between; */
        /* align-items: center; */
        /* margin: 0 auto; */
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
</style>