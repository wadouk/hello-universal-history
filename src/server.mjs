import  express from 'express'
import path from 'path'

const app = express()

app.use((req, res) => {
    if (req.path.match(/\.\w+$/)) {
        res.sendFile(path.join(process.cwd(), req.path))
    } else {
        res.sendFile(path.join(process.cwd(), 'src/index.html'))
    }
})
app.listen(8086)