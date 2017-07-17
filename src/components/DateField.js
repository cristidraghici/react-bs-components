import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DatePicker from 'react-bootstrap-date-picker'

//
// Props
//

const propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    className: ''
}

//
// The component
//

class BootstrapDateField extends Component {
    state = {
        value: false,
        formattedValue: null
    }

    componentDidMount() {
        this.setState({value: this.props.value});
    }

    handleChange = (value, formattedValue) => {
        this.setState({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        });
    }

    render() {
        let {label, name, error, className} = this.props;

        return (
            <div className={classnames(className, 'form-group', {'has-error': error})}>
                <label className="control-label">{label}</label>
                <div className="datefield-length-fix">
                    <DatePicker className="date-picker-full-length" value={this.state.value} onChange={this.handleChange} name={name} id={name}/>
                </div>
                {error && <span className="help-block">{error}</span>}
            </div>
        );
    }
}

// Export

BootstrapDateField.propTypes = propTypes;
BootstrapDateField.defaultProps = defaultProps;

export default BootstrapDateField;
