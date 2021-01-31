import { History } from "./base";

// 如果是根路径，那么进入时在路由上添加#/
function ensureSlash(){
    if(!window.location.hash){  //window.location.hash 有兼容性
        window.location.hash = '/'
    }
}
function getHash(){
    return window.location.hash.slice(1)
}
export default class HashHistory extends History {
    constructor(router){
        super(router)
        ensureSlash()
    }
    getCurrentLocation(){
        return getHash()
    }
    setUpListener(){
        window.addEventListener('hashchange',()=>{
            // 拿到hash值进行跳转
            let hash = getHash()
            console.log(hash);
            this.transitionTo(hash)
        })
    }
}