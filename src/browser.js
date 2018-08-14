import createBrowserHistory from 'history/createBrowserHistory'
import Left from "./zones/Left"
import Middle from "./zones/Middle"
import Map from "./zones/Map"
import routes from './routes'
import state from './state'
import generateUrls from "universal-router/generateUrls"

const history = createBrowserHistory();

function a(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href')) {
        event.preventDefault()
        history.push(event.target.getAttribute('href'))
    } else {
        console.log('stopPropagation not invoked on ', event.target)
    }
}

window.addEventListener('load', () => {
    const app  = {
        home: () => {
            left.displaySearch()
            left.removeAddresses()
            middle.clear()
            return true
        },
        search: () => {
            left.displaySearch()
            left.displayAddresses()
            middle.clear()
            return true
        },
        showGeoentity: (params) => {
            left.displaySearch()
            left.displayAddresses()
            middle.displayGeoentity(params)
            return true
        }
    }

    function resolve() {
        router.resolve(history.location).then(() => {
            if (window.history.state && window.history.state.state) {
                map.setCenter(window.history.state.state)
            }
            console.log("route changed")
        })
    }

    const router = routes(app)
    const url = generateUrls(router)

    state.register(url, history)

    history.listen(resolve)
    resolve()

    document.querySelector("body").addEventListener('click', a)

    const left = new Left()
    const middle = new Middle()
    const map = new Map()
})
