import React from 'react'
import CartStore from '~src/store/cart'
import { Link } from 'react-router-dom'
import { routesMap } from '~src/router/router';

class ProductsGridItem extends React.Component {

    addProductToCart = () => {
        CartStore.addProduct(this.props.product)
    }

    render() {
        return <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">{this.props.product.category}</strong>
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">{this.props.product.title}</a>
                    </h3>
                    <div className="mb-1 text-muted">{this.props.product.price} USD</div>
                    <p className="card-text mb-auto">{this.props.product.description}</p>
                    <button className="btn btn-outline-success" onClick={this.addProductToCart}>Add to Cart</button>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block"
                     src={this.props.product.img}
                     data-holder-rendered="true" />
            </div>
        </div>
    }
}

export default ProductsGridItem