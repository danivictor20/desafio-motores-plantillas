class Products{
  constructor(){
      this.products = []
      this.sequenceId = 0
  }

  get productsAll(){
      try {
          return this.products
      } catch(error){
          throw new Error(`Se produjo un error: ${error.message}`)
      }
  }

  saveProduct(product){
      try{

          this.sequenceId++
          const newProduct = {
              title: product.title,
              price: product.price,
              thumbnail: product.url,
              id: this.sequenceId
          }
          this.products.push(newProduct)
          return newProduct

      } catch(error){
          throw new Error(`Se produjo un error al guardar el nuevo producto: ${error.message}`)
      }
  }

  getProductById(idProduct){
      try {
          return this.products.find(product => product.id == parseInt(idProduct))
      } catch(error){
          throw new Error('Hubo un error al buscar')
      }
  }


  updateProduct(idProduct, product){
      try {
          const productsTemp = []
          let prodUpdated = {}

          this.products.forEach(prod => {
              if (prod.id == idProduct){
                  prodUpdated = {
                      title: product.title,
                      price: product.price,
                      thumbnail: product.url,
                      id: idProduct
                  }
                  productsTemp.push(prodUpdated)
              }else{
                  productsTemp.push(prod)
              }
          })
          this.products = productsTemp
          return prodUpdated
      } catch(error){
          throw new Error(`Ocurrió un error al actualizar: ${error.message}`)
      }
  }

  deleteProduct(idProduct){
      try {
          this.products = this.products.filter(prod => prod.id != idProduct)
      } catch(error){
          throw new Error(`Ocurrió un error al eliminar: ${error.message}`)
      }
  }
}

module.exports = Products