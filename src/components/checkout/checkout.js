import React from 'react'
import { Link } from 'react-router-dom'
import { routesMap } from '~src/router/router'

import {Button, Modal} from 'react-bootstrap'
import CartStore from "~src/store/cart"

class Checkout extends React.Component {
    state = {
        showModal: false
    }

    show = () => this.setState({showModal: true});
    hide = () => this.setState({showModal: false});

    render() {
        return <div className="col-md-12 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName"/>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="username"/>
                            <div className="invalid-feedback">
                                Your username is required.
                            </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address"/>
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                </div>

            </form>
            <Link to={routesMap.cart} className="btn btn-outline-dark">Back</Link>

            <a className="btn btn-outline-success" onClick={this.show}>Next</a>


            <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong>Total: {CartStore.totalItems}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.hide}>
                        Cancel
                    </Button>
                    <Link className="btn btn-outline-success" to={routesMap.result}>
                        Confirm
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    }
}

export default Checkout