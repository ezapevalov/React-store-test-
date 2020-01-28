import React from 'react'

class Error404 extends React.Component {

    render() {
        return <div className="col-md-12 order-md-1">
            <h4 className="mb-3">Error 404</h4>
            <p>Page not found</p>
            <button type="button"
                    className="btn btn-outline-dark"
                    onClick={() => this.setPage('cart')}
            >Go to main page</button>
        </div>
    }
}

export default Error404