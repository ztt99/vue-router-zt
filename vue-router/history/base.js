export class History {
    constructor(router) {
        this.router = router

        // 创建完路由后，先有一个默认值 路径和匹配到的记录做成一个映射表

        // 默认当创建history时 路径应该是 / 并且匹配到的记录是[]

        this.current = createRoute(null, {
            path: '/'
        })
    }
    transitionTo(location, onComplete) {
        // 1. 进入页面

        onComplete && onComplete()  //初始化时的

        // 2. 获取要渲染的组件
        this.route = this.router.match(location)  //得到的是{'/':mached:[]}

        console.log(this.route, 999);
        // 跳转 标记form to
        // 路径变化视图刷新
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