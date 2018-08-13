import Router from "universal-router"

export default (app) => {
    return new Router([
        { name: 'geoentity', path: '/geoentity/:id', action: (context, params) => app.showGeoentity(params) },
        { path: '/', action: () => app.home()},
        { name: 'addresses', path: '/addresses', action: () => app.search() },
    ])
}