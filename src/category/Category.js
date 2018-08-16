import Backbone from 'backbone'

const Model = Backbone.Model.extend({
    url: "https://poiassets.mappy.net/configuration/configuration.fr_FR.json",
    getFirstMenu: function () {
        this.categories = this.get('categories').reduce((categories, category) => {
            categories[category.id] = category
            return categories
        }, {})
        return this.get('menus').web.map(entry => {
            return this.categories[entry.id]
        })
    }
})

export default Backbone.View.extend({
    el: '#top',
    views:{},
    initialize: function () {
        this.model = new Model()
        this.model.fetch()
        this.listenTo(this.model, "change", this.render.bind(this))
    },
    render: function () {
        console.log("model", this.model.getFirstMenu())
    }
})