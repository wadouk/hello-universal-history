import Backbone from 'backbone'
import state from '../state'

export default Backbone.View.extend({
    template: require('./search.html.twig'),
    initialize: function () {
    },
    events :{
        'click #find': 'results'
    },
    results: function (e) {
        state.setFind(e.target.value)
        e.stopPropagation()
    },
    render: function() {
        this.$el.html(this.template.render())
        return this
    }
})