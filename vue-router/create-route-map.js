function createRouteMap(routes,oldRoute){
    let pathMap = oldRoute || Object.create(null)
    routes.forEach((route)=>{
        addRouteRecord(route,pathMap)
    })
    return {
        pathMap
    }
}


export {
    createRouteMap
}

// 先序递归
function addRouteRecord(route,pathMap,parent){
    let path = parent ?parent.path + '/' +  route.path : route.path

    let recode = {
        path,
        component:route.component,
        parent
    }
    if( !pathMap[path]){
        pathMap[path] = recode
    }

    if(route.children){
        route.children.forEach(child=>{
            addRouteRecord(child,pathMap,recode)
        })
    }
}