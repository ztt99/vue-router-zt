export class History {
    constructor(router){
        console.log(router.matcher);
    }
    transitionTo(location,onComplete){
        onComplete && onComplete()  //初始化时的
    }

}