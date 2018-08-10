import Backbone from 'backbone'

export default Backbone.View.extend({
    template: require('./geoentity.html.twig'),
    render: function(props) {
        this.$el.append(this.template.render(props))
        return this
    }
})