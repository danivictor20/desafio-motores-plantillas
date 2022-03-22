const express = require("express")
const Products = require('./api/Products')
const storeProducts = new Products()

const routesProduct = express.Router()
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routesProduct)


app.get('/', (req, res) => {
    const view = 'form'
    res.render('index', {view});
})

routesProduct
    .get('/', (req, res) => {
        const view = 'lista'
        const products = storeProducts.productsAll
        res.render('index', {products, view});
    })
    .post('/', (req, res) => {
        const prodNuevo = storeProducts.saveProduct(req.body)
        res.redirect('/');
    })
    

const PORT = 8080
const server = app.listen(PORT, () => console.log(`http://localhost:${PORT}/productos`))
server.on('error', (err) => console.log(err.message))