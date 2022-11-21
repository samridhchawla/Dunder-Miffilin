<template>
  <div>
    <main-menu></main-menu>
    <div class="container-fluid">
          <router-view @mapmap='addedItem' :sendFinall='item'></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  },
  data(){
    return{
      item:"",
    }
  },
  methods:{
    addedItem(val){
      this.item=val;
    },
  }
}
</script>

<style>

</style>
