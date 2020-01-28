import React from 'react'
import {observer} from 'mobx-react'
import Counter from '~src/components/counter/counter'
import cartStore from '~src/store/cart'
import { Link } from 'react-router-dom'
import { routesMap } from '~src/router/router';

@observer class Cart extends React.Component {

    render() {
        return <div className="col-12">
            <h2>Cart</h2>
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {cartStore.products.map((p, i) => {
                        return <tr key={`product-${p.id}-tr`}>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td>
                                <Counter productId={p.id} max={p.rest} amount={p.amount}/>
                            </td>
                            <td>{p.amount * p.price}</td>
                            <td>
                                <button type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => cartStore.remove(i)}
                                >X</button>
                            </td>
                        </tr>
                    })}

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td><b>{cartStore.totalPrice}</b>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <Link to={routesMap.checkout} className="btn btn-outline-success">Checkout</Link>
        </div>
    }
}

export default Cart