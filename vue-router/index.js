import {install} from './install'

export default class VueRouter{
    constructor(options){
console.log(options);
    }
}


// 需要有一个install方法

VueRouter.install = install