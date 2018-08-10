import Backbone from 'backbone'
import Addresses from './addresses'

export default Backbone.View.extend({
    template: require('./search.html.twig'),
    initialize: function () {
    },
    events :{
        'click #trouve': 'results'
    },
    results: function () {
        this.addresses = new Addresses({el: "#addresses"})
        this.addresses.render()
        return Promise.resolve()
    },
    render: function() {
        this.$el.append(this.template.render())
        return this
    }
})