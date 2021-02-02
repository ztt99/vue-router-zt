function  runQueque(queue,iterator,cb) {


    function step(index) {
        if(index === queue.length) return cb()
        iterator( queue[index],()=>step(index++)) //如果不调用next就会卡在这里，不会index++
    }
    step(0)
}

export class History {
    constructor(router) {
        this.router = router

        // 创建完路由后，先有一个默认值 路径和匹配到的记录做成一个映射表

        // 默认当创建history时 路径应该是 / 并且匹配到的记录是[]

        this.current = createRoute(null, { //默认是匹配不到组件的，因为是null
            path: '/'
        })
    }
    transitionTo(location, onComplete) {
        // 1. 进入页面
        onComplete && onComplete()  //初始化时的

        // 2. 获取要渲染的组件
        this.route = this.router.match(location)  //得到的是{'/':mached:[]}

        // 3.可能这次匹配的和this.current第一次匹配的是同一个结果，也就是都是空的，那么就没有意义
            // 3.1 首次渲染的时候
            // 3.2 重复点击相同路由的时候

        if(this.current.path === this.route.path && this.current.matched.length === this.route.matched.length){
            return 
        }
        let queue = [].concat(this.router.beforeQueue)

        const iterator = (hook,next)=>{
            hook(this.current,this.router,()=>{
                next()
            })
        }
        runQueque(queue,iterator,()=>{

        /**
         * 4. 路径变化视图刷新
         * 4.1 更新this.current
         * 4.2 需要将当前路由信息注册在实例上，成为响应式
         */

        this.updateRoute()
        // 跳转 标记form to
        })

    }
    updateRoute(){
        // 这个时候监听的
        this.current = this.route
        this.cb && this.cb(this.route)
    }
    listen(cb){
        this.cb = cb
    }
}
export function createRoute(recode, location) {
    let matched = []
    while (recode) {
        matched.unshift(recode)
        recode = recode.parent
    }
    return {
        ...location,
        matched,
    }
}