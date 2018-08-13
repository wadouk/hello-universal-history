import Backbone from 'backbone'
import state from './state'

export default Backbone.View.extend({
    template: require('./addresses.html.twig'),
    events: {
        'click li': 'openGeoentity'
    },
    openGeoentity: function (e) {
        state.set('geoEntityId', e.target.dataset.id)
        e.stopPropagation()
    },
    render: function() {
        this.$el.append(this.template.render())
        return this
    }
})