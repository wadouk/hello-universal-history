import Backbone from 'backbone'
require('leaflet')

export default Backbone.View.extend({
    el: '#right',
    initialize: function () {
        this.map = L.map("map").setView([51.505, -0.09], 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    },
    setCenter: function (center) {
        this.map.setView(L.latLng(center.lat, center.lng), 15)
    }
})