function install(Vue){
    // 1. 会在全局中注册组件router-link router-view

    Vue.component('router-link',{
        render:h=>h('a',{},'')
    })
    Vue.component('router-view',{
        render:h=>h('div',{},'')
    })

    // 2. 挂载属性$route $router

    /**
     * $route 就是current对象
     * $router 就是Router的实例
     */

     Object.defineProperty( Vue.prototype,'$route',{
         get(){
             return this._routerRoot._route
         }
     })
     Object.defineProperty( Vue.prototype,'$router',{
        get(){
            return this._routerRoot.router
        }
    })

    // 3. 给所有组件混入一个属性router，表示当前路由配置

    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                this._routerRoot = this
                this._router = this.$options.router
                this._router.init(this) //路由实例上init，并把根组件传递过去
                // 将路由变成响应式  Vue.util.defineReactive这个方法是Vue的私有属性
                Vue.util.defineReactive(this,'_route',this._router.history.current)
                console.log(this._route);
            }else{
                this._routerRoot = this.$parent && this.$parent._routerRoot
            }
        }
    })
}

export {
    install
}