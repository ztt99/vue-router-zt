import { History } from "./base";

// 如果是根路径，那么进入时在路由上添加#/
function ensureSlash(){
    if(!window.location.hash){  //window.location.hash 有兼容性
        window.location.hash = '/'
    }
}

export default class HashHistory extends History {
    constructor(router){
        super(router)
        ensureSlash()
    }
}