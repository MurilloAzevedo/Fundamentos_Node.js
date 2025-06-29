export function buildRoutePath(path){
    const routeParameersRegex = /:([a-zA-Z]+)/g
    const pathWithparams = path.replaceAll(routeParameersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp('^${pathWithParams}')

    pathRegex.test

    return pathRegex
}