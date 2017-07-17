import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

//
// Props
//

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    inline: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.any.isRequired,
    allowAutocomplete: PropTypes.bool.isRequired
}

const defaultProps = {
    type: 'text',
    inline: false,
    className: '',
    allowAutocomplete: false
}

//
// The component
//

const BootstrapTextField = (props) => {
    let {
        name,
        value,
        label,
        error,
        type,
        inline,
        onChange,
        className,
        allowAutocomplete
    } = props;

    if (inline) {
        return (
            <div>
                <div className={classnames(className, 'input-group', {
                    'has-error': !!error
                })}>
                    <span className="input-group-addon">{label}</span>
                    {!allowAutocomplete && <input name={name} value="" className="hidden"/>}
                    <input onChange={onChange} value={value} type={type} name={name} className="form-control" autoComplete="none"/>
                </div>
                {error && <small className="help-block text-right">{error}</small>}
            </div>
        );
    }

    return (
        <div className={classnames(className, 'form-group', {
            'has-error': !!error
        })}>
            <label className="control-label">{label}</label>
            {!allowAutocomplete && <input name={name} value="" className="hidden"/>}
            <input onChange={onChange} value={value} type={type} name={name} className="form-control" autoComplete="off" autoCorrect="off" autoCapitalize="off"/> {error && <small className="help-block">{error}</small>}
        </div>
    );
}

// Export

BootstrapTextField.propTypes = propTypes;
BootstrapTextField.defaultProps = defaultProps;

export default BootstrapTextField;
