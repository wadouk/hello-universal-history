import Router from "universal-router"

export default (app) => {
    return new Router([
        { name: 'geoentity', path: '/geoentity/:id', action: (context, {id}) => app.showGeoentity(id) },
        { path: '/', action: () => app.home()},
        { path: '/addresses/', action: () => app.search() },
    ])
}