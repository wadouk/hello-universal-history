import Backbone from 'backbone'
import state from '../state'
import L from 'leaflet'

export default Backbone.View.extend({
    initialize: function () {
        this.map = L.map("map").setView([51.505, -0.09], 13)
        this.registerCenter()
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        this.map.on('moveend', this.registerCenter.bind(this))
    },
    setCenter: function (center) {
        this.map.setView(L.latLng(center.lat, center.lng), center.zoom)
    },
    registerCenter: function () {
        const center = this.map.getCenter()
        state.setCenter({lat: center.lat, lng: center.lng, zoom: this.map.getZoom()})
    }
})