import { createRouteMap } from "./create-route-map"

export default function createMatcher(routes){
    let {pathMap} = createRouteMap(routes || [])

    // 返回addRouters，match
    function addRouters(routes){
        createRouteMap(routes,pathMap)
    }

    function match(){

    }
    return {
        addRouters,
        match
    }
}