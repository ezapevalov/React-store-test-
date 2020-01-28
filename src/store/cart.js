import {observable, computed, action} from 'mobx'

class CartStore {
    @observable products = []

    @action addProduct(product) {
        let i = this.findIndex(product.id)

        if(i === -1) { // productNotFound
            product.amount = 1

            this.products.push(product)
        } else { // Product found. Update amount
            this.products[i].amount += 1
        }
    }

    @action changeAmount(i, newAmount) {
        this.products[i].amount = newAmount
    }

    @action remove(i) {
        this.products.splice(i, 1)
    }

    @action setNewAmount(productId, newAmount) {
        let i = this.findIndex(productId)

        if(i !== -1) {
            this.products[i].amount = newAmount
        }
    }

    @computed get totalItems() {
        return this.products.reduce((accumulator, p) => {
            return p.amount + accumulator
        }, 0)
    }

    @computed get totalPrice() {
        return this.products.reduce((accumulator, p) => {
            return p.amount * p.price + accumulator
        }, 0)
    }

    @computed get findIndex() {
        return productID => this.products.findIndex(product => product.id === productID)
    }
}

export default new CartStore()