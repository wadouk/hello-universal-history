import Backbone from 'backbone'
import Search from '../search/Search'
import Addresses from '../addresses/Addresses'

export default Backbone.View.extend({
    el: "#left",
    views : {},
    displaySearch: function () {
        if (!this.views.search) {
            this.views.search = new Search()
            this.views.search.render()
            this.$el.append(this.views.search.$el)
        }
    },
    displayAddresses: function () {
        if (!this.views.addresses) {
            this.views.addresses = new Addresses()
            this.views.addresses.render()
            this.$el.append(this.views.addresses.$el)
        }
    },
    removeAddresses: function () {
        if (this.views.addresses) {
            this.views.addresses.remove()
            delete this.views.addresses
        }
    },
})