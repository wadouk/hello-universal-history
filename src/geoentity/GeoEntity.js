import Backbone from 'backbone'

export default Backbone.View.extend({
    template: require('./geoentity.html.twig'),
    setId: function(params) {
        this.params = params
    },
    render: function() {
        this.setElement(this.template.render(this.params))
        return this
    }
})