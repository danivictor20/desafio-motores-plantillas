const express = require("express")
const handlebars = require('express-handlebars')
const Products = require('../api/Products')

const storeProducts = new Products()

const routesProduct = express.Router()
const app = express()

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: './views/layouts',
}))

app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routesProduct)

app.get('/', (req, res) => {
    res.render('form');
})

routesProduct
    
    .get('/', (req, res) => {
        const prods = storeProducts.productsAll
        res.render('table', {prods});
    })
    .post('/', (req, res) => {
        const prodNuevo = storeProducts.saveProduct(req.body)
        res.redirect('/')
    })
    

const PORT = 8080
const server = app.listen(PORT, () => console.log(`http://localhost:${PORT}/productos`))
server.on('error', (err) => console.log(err.message))