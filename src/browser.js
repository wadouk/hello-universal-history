import createBrowserHistory from 'history/createBrowserHistory'
import Router from 'universal-router';

const history = createBrowserHistory();


const router = new Router([
    { path: '/poi/:id', action: () => 'Page Two' },
    { path: '/', action: () => 'home' },
])

function a(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href')) {
        event.preventDefault()
        history.push(event.target.getAttribute('href'))
    } else {
        console.log('fail')
    }
}

window.addEventListener('load', () => {
    history.listen(rout)

    function rout() {
        router.resolve(history.location).catch((e) => {
            window.location = '/'
        }).then((result) => {
            document.querySelector("#app").innerHTML = result
        })
    }
    rout()

    document.querySelector("body").addEventListener('click', a)
})
