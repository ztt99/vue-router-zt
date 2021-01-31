<template>
  <div>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
created(){
  console.log(this._routerRoot._router);
}
}
</script>

<style>

</style>