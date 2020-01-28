import React from 'react'
import PropTypes from 'prop-types'

class Lazy extends React.Component {

    componentDidUpdate(prevProps, prevState) {

    }

    checkChange = (e) => {
        let val = e.target.value

        if(val !== this.props.value) {
            this.props.onChange(val)
        }
    }

    checkEnteredKey = (e) => {
        if(e.keyCode === 13) {
            this.checkChange(e)
        }
    }

    render() {
        return <div key="lazy-form-1">
            <br/>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Lazy input</label>
                    <input type="text"
                           defaultValue={this.props.value}
                           onBlur={this.checkChange}
                           onKeyUp={this.checkEnteredKey}
                           className={`form-control`} />
                    <small id="lazyHelp" className="form-text text-muted">Some help data for lazy input</small>
                </div>
            <br/>
        </div>
    }
}


Lazy.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

Lazy.defaultProps = {

};

export default Lazy