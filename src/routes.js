import Router from "universal-router"
import queryString from 'querystring'

export default (app) => {
    return new Router({
        action(context) {
            context.params = Object.assign(context.params, queryString.parse(context.hash.slice(1)))
        },
        children : [
        { name: 'geoentity', path: '/geoentity/:id', action: (context, params) => app.showGeoentity(params) },
        { path: '/', action: () => app.home()},
        { name: 'addresses', path: '/addresses', action: () => app.search() },
    ]})
}