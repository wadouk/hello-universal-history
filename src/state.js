import Backbone from 'backbone'
let state = new Backbone.Model()

state.register = (url, history) => {
    state.on('change:geoEntityId', (model, id) => {
        history.push(url('geoentity', {id : id}))
    })
    state.on('change:find', () => {
        history.push(url('addresses'))
    })
}

state.setGeoEntityId = (id) => {
    state.set('geoEntityId', id)
}
state.setFind = function(find) {
    state.set('find', find)
}

export default state
