import Backbone from 'backbone'
import state from '../state'

export default Backbone.View.extend({
    template: require('./addresses.html.twig'),
    events: {
        'click li': 'openGeoentity'
    },
    openGeoentity: function (e) {
        state.setGeoEntityId(e.target.dataset.id)
        state.setCenter({lat: e.target.dataset.lat, lng: e.target.dataset.lng, zoom: 15})
        e.stopPropagation()
    },
    render: function() {
        this.$el.append(this.template.render({addresses : [{
            id : 1,
            lat: 45.1,
            lng: 1.3,
            label: 'hy'
        }, {
            id : 2,
            lat: 43.3,
            lng: 2.3,
            label: 'ho'
        }]}))
        return this
    }
})