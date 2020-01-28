import React from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'
import cartStore from '~src/store/cart'

class Counter extends React.Component {
    increase = () => {
        let increasedValue = this.props.amount + 1

        this.setNewAmount(increasedValue)
    }

    decrease = () => {
        let decreasedValue = this.props.amount - 1

        this.setNewAmount(decreasedValue)
    }

    handleChange = (event) => {
        let inputValue = parseInt(event.target.value);

        this.setNewAmount(inputValue)
    }

    setNewAmount(newAmount) {
        newAmount = Math.max(this.props.min, Math.min(newAmount, this.props.max))

        cartStore.setNewAmount(this.props.productId, newAmount)
    }

    render() {
        return <div key={Math.random()} className="input-group">
            <div className="input-group-prepend">
                <button type="button" onClick={this.decrease} className="btn btn-outline-secondary">-1</button>
            </div>
            <input type="text" value={this.props.amount} onChange={this.handleChange} className="form-input" />
            <div className="input-group-append">
                <button type="button" onClick={this.increase} className="btn btn-outline-secondary">+1</button>
            </div>
        </div>
    }
}


Counter.propTypes = {
    productId: PropTypes.number.isRequired,
    amount: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
};

Counter.defaultProps = {
    amount: 1,
    min: 1,
};

export default Counter