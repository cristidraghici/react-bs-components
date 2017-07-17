import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

//
// Props
//

const propTypes = {
    name: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.any,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    className: ''
}

//
// The component
//

class BootstrapCheckboxField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            checked: props.checked,
            label: props.label,
            error: props.error,
            onChange: props.onChange
        }

        this.toggleIsChecked = this.toggleIsChecked.bind(this);
    }

    toggleIsChecked(e) {
        let {onChange, name} = this.state;

        onChange.call(this, {
            target: {
                name: name,
                value: !this.state.checked
            }
        });

        this.setState({
            checked: !this.state.checked
        });
    }

    componentWillReceiveProps(newProps) {
        if (this.state.checked !== newProps.checked) {
            this.setState({checked: newProps.checked});
        }
    }

    render() {
        let {name, checked, label, error} = this.state;

        return (
            <div className={classnames('checkbox', {'has-error': error})}>
                <label htmlFor={name}>
                    <input type="checkbox" name={name} id={name} onChange={this.toggleIsChecked} checked={checked}/> {label}
                </label>

                {error && <span className="help-block">{error}</span>}
            </div>
        );
    }
}

// Export

BootstrapCheckboxField.propTypes = propTypes;
BootstrapCheckboxField.defaultProps = defaultProps;

export default BootstrapCheckboxField;
