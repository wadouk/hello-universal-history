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
            history.replace(`#lat=${center.lat}&lng=${center.lng}&zoom=${center.zoom}`, center)
        }
    })
}

state.setGeoEntityId = (id) => {
    state.set('geoEntityId', id)
    state.unset('center')
}
state.setCenter = (center) => {
    state.set('center', {lat: +parseFloat(center.lat).toFixed(6), lng: +parseFloat(center.lng).toFixed(6), zoom: center.zoom})
}
state.setFind = function(find) {
    state.set('find', find)
}

export default state
