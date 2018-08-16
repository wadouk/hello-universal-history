import Backbone from 'backbone'
import Map from '../map/Map'
import Category from '../category/Category'

export default Backbone.View.extend({
    el: '#right',
    views:{},
    initialize: function () {
        this.views.map = new Map()
        this.views.category = new Category()
    },
})