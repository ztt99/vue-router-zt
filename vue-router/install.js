function install(Vue){
    // 1. 会在全局中注册组件router-link router-view

    Vue.component('router-link',{
        render:h=>h('a',{},'')
    })
    Vue.component('router-view',{
        render:h=>h('div',{},'')
    })

    // 2. 挂载属性$route $router

    Vue.prototype.$route = {}
    Vue.prototype.$router = {}

    // 3. 给所有组件混入一个属性router，表示当前路由配置

    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                this._routerRoot = this
                this._router = this.$options.router
            }else{
                this._routerRoot = this.$parent && this.$parent._routerRoot
            }
        }
    })
}

export {
    install
}