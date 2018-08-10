import Backbone from 'backbone'

export default Backbone.View.extend({
    template: require('./addresses.html.twig'),
    events: {
        'click li': 'openGeoentity'
    },
    openGeoentity: function () {

    },
    render: function() {
        this.$el.append(this.template.render())
        return this
    }
})