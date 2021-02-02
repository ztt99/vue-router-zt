<template>
  <div>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <button @click="to">to</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
created(){
  console.log(this._routerRoot._router);
},
methods:{
  to(){
    this.$router.push('/')
  }
}
}
</script>

<style>

</style>