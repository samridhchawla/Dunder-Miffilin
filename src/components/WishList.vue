<template>
    <div class="table-responsive"> 
        <h1>WishList</h1>
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
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="(item,idx) in wishList" :key="idx" class="table-primary">
                        <td>{{item.id}}</td>
                        <td> <img :src="'data/img/'+item.url"></td>
                        <td>{{item.product_name}}</td>
                        <td>${{item.price}}</td>
                        <td id="dele" @click="dele(idx)">
                        <a>X</a>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
export default {
    name:'WishList',
    data(){
        return {
            wishList: [],
        }
    },
    methods:{
        dele(idx){
            this.wishList.splice(idx,1);
            this.wishList =  sessionStorage.setItem('wishlist',JSON.stringify(this.wishList));
            this.wishList =  JSON.parse(sessionStorage.getItem('wishlist'));

        },
    },
    mounted(){
        if(sessionStorage.getItem('wishlist')){
            this.wishList = JSON.parse(sessionStorage.getItem('wishlist')) 
        }
    }
}
</script>
<style scoped>
 img{
        width: 15vh;
        height: 25vh;
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