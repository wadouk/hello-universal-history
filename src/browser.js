import createBrowserHistory from 'history/createBrowserHistory'
import Search from "./search"
import routes from './routes'
import Geoentity from './geoentity'

let search = new Search()

const app  = {
    home: () => {
        search.render()
        document.querySelector("#app").innerHTML = ""
        document.querySelector("#geoentity").innerHTML = ""
        document.querySelector("#app").appendChild(search.el)
        return true
    },
    search: () => {
        return true
    },
    showGeoentity: (id) => {
        const geoentity = new Geoentity()
        geoentity.render({id: id})
        document.querySelector("#geoentity").innerHTML = ""
        document.querySelector("#geoentity").appendChild(geoentity.el)
        return true
    }
}

const history = createBrowserHistory();

const router = routes(app)

function a(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href')) {
        event.preventDefault()
        history.push(event.target.getAttribute('href'))
    } else {
        console.log('fail')
    }
}

window.addEventListener('load', () => {
    function resolve() {
        router.resolve(history.location).then(() => {
            console.log("route changed")
        })
    }

    history.listen(resolve)
    resolve()

    document.querySelector("body").addEventListener('click', a)
})
