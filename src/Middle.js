import Backbone from 'backbone'
import GeoEntity from './GeoEntity'

export default Backbone.View.extend({
    el: "#middle",
    views : {},
    displayGeoentity: function (params) {
        this.clear()
        this.views.geoEntity = new GeoEntity()
        this.views.geoEntity.setId(params)
        this.views.geoEntity.render()
        this.$el.append(this.views.geoEntity.$el)
    },
    clear: function () {
        if (this.views.geoEntity) {
            this.views.geoEntity.remove()
            delete this.views.geoEntity
        }
    }

})