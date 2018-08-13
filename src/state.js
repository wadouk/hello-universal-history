import Backbone from 'backbone'
let state = new Backbone.Model()

state.register = (url, history) => {
    state.on('change:geoEntityId', (model, id) => {
        history.push(url('geoentity', {id : id}))
    })
    state.on('change:find', () => {
        history.push(url('addresses'))
    })
    state.on('change:center', (model, center) => {
        if (center) {
            history.replace(`#${center.lat}/${center.lng}`, center)
        }
    })
}

state.setGeoEntityId = (id) => {
    state.set('geoEntityId', id)
    state.unset('center')
}
state.setCenter = (center) => {
    state.set('center', center)
}
state.setFind = function(find) {
    state.set('find', find)
}

export default state
