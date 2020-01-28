import React from 'react'
import {observer} from 'mobx-react'
import { Link } from 'react-router-dom'
import { routesMap } from '~src/router/router';

import CartStore from '~src/store/cart'

@observer class TopNav extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">React Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={routesMap.home} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={routesMap.products} className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={routesMap.cart} className="nav-link">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={routesMap.checkout} className="nav-link">Checkout</Link>
                    </li>
                </ul>
                <span className="navbar-text nav-cart-total">
                    Cart total: <b>{CartStore.totalItems}</b>
                </span>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    }
}

export default TopNav