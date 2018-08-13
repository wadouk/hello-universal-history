import createBrowserHistory from 'history/createBrowserHistory'
import Left from "./Left"
import Middle from "./Middle"
import routes from './routes'
import state from './state'
import generateUrls from 'universal-router/generateUrls'

const history = createBrowserHistory();

function a(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href')) {
        event.preventDefault()
        history.push(event.target.getAttribute('href'))
    } else {
        console.log('fail')
    }
}

window.addEventListener('load', () => {
    const left = new Left()
    const middle = new Middle()

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
            console.log("route changed")
        })
    }

    const router = routes(app)
    const url = generateUrls(router)

    state.on('change:geoEntityId', function (model, id) {
        history.push(url('geoentity', {id : id}))
    })
    state.on('change:find', function () {
        history.push(url('addresses'))
    })

    history.listen(resolve)
    resolve()

    document.querySelector("body").addEventListener('click', a)
})
