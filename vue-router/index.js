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
}


// 需要有一个install方法

VueRouter.install = install