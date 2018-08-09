import Backbone from 'backbone'

module.exports = Backbone.View({
    id: 'search',
    template: require('search.html'),
    events :{
        'click #trouve': 'trouve'
    },
    trouve: (e) => {
        e.target.value
    }
})