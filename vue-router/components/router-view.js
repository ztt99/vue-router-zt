export default {
    name: 'RouterView',
    functional: true,
    render(h, { parent, data }) {
        /**
         * 1. 获取current对象
         * 2. 记录渲染depth
         * 3. 判断是否存在下级组件
         * 4. 渲染组件
         * 
         * data : 在组件标签上的参数
         */
        data.routerView = true

        let route = parent.$route  //parent当前组件所在的实例对象
        let depth = 0

        /**
         * 想通过这种自累加的方式进行组件的渲染，也会陷入死循环
         *  1. 进入/about
         *  2. 这时候路由matched匹配的只有1个component，但是他有children，所以组件内部存在view组件
         *  3. route.matched.length-1 > depth 这个时候不会进入这里
         *  ...
         */
        // if( route.matched.length-1 > depth){
        //     depth++  //depth会一直都是1，因为每次新进入 都会重新定义depth，应该使用while循环
        //     recode = route.matched[depth]
        //     return h(recode.component,data)
        // }

        while (parent) {  //view组件的父标签
            /**
             * $vnode 是占位符vnode  是组件标签名的虚拟节点(使用组件时，自定义的组件标签)
             * _vnode 组件内部渲染的虚拟节点
             * parent.$vnode 代表不是父组件 app
             * parent.$vnode.data.routerView 代表这个组件时router-view组件
             */
            if(parent.$vnode && parent.$vnode.data.routerView){
                depth++
            }
            parent = parent.$parent
        }
        let recode = route.matched[depth]

        if (recode) {
            /** 
             * 
             * 1. 渲染app组件
             * 2. 进入view组件中，这时候渲染recode中matched中的第一个component，也就是about组件
             * 3. 进入about组件，depth没有变化，还是渲染recode中matched中的第一个component，也就是about组件
             * 4. 造成死循环
             */
            return h(recode.component, data)
        } else {
            return h()  //空的虚拟节点
        }
    }
}