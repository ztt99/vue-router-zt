import { createRouteMap } from "./create-route-map"
import { createRoute } from './history/base'
export default function createMatcher(routes) {
    let { pathMap } = createRouteMap(routes || []) //扁平化处理

    // 返回addRouters，match
    function addRouters(routes) {
        createRouteMap(routes, pathMap)
    }

    function match(location) {
        let recode = pathMap[location]
        return createRoute(recode || null, {
            path: location
        })
    }
    return {
        addRouters,
        match
    }
}