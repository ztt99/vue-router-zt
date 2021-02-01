import { install } from './install'
import createMatcher from './create-macher'
import HashHistory from './history/hash'
import BrowserHistory from './history/history'

export default class VueRouter {
    constructor(options) {

        // 1. 将配置扁平化
        this.matcher = createMatcher(options.routes)
        // 2. 处理路由跳转以及监听
        options.mode = options.mode || 'hash'

        switch (options.mode) {
            case 'hash':
            this.history = new HashHistory(this)
                break;
            case 'history':
            this.history = new BrowserHistory(this)
                break;
        }
    }
    match(location){
      return  this.matcher.match(location)
    }
    init(App){
        // 监听hash或history变化，默认跳转对应的路径
        console.log(App);
        const history = this.history
        function setUpHashListener(){
            history.setUpListener()
        }
        // 初始化时，获取当前hash值进行跳转并监听
        history.transitionTo(
            history.getCurrentLocation(), //获取当前的hash
            setUpHashListener //监听hash
        )
    }
}


// 需要有一个install方法

VueRouter.install = install