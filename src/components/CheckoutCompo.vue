<template>
<div >
    <div id="bgModalbox" @click="closeFn"></div>
    <section>
        <button @click="closeFn">&#9587;</button>
        <article >
            <img :src="'data/img/' + item.url" />
            <aside>
                <h3>Category: {{ item.category }}</h3>
                <h3>Name: {{ item.product_name }}</h3>
                <h3>Price: ${{ item.price }}</h3>
                <h3>Amount<input type="number" v-bind="itemAmount"></h3>
                <h3><button @click="wishListFn">Wish-List</button></h3>
                <h3><button @click="cartAdd">Add to cart</button></h3>
            </aside>
        </article>
    </section>
</div>
    
</template>
<script>
export default {
    name:'CheckoutCompo',
    props:[
        'item',
        'idx'
    ],
    data(){
        return {
            itemAmount: 0,
        }
    },
    methods:{
        closeFn(){
            this.$emit('close')
        },
        cartAdd(){
            this.$emit('add',this.idx,this.itemAmount)
        },
        wishlistFn(){
            this.$emit('wishlist',this.idx)

        }
    }
}
</script>
<style scoped>
    #bgModalbox{
        background-color:rgba(211,211,211, .6) ;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    section{
        z-index: 2;
        position: absolute;
        background-color: whitesmoke;
        width: 80%;
        height: 80%;
    }
    article{
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>