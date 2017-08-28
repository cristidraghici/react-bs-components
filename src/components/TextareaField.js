import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'

//
// Props
//

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.any.isRequired,
    autoSize: PropTypes.bool.isRequired
}

const defaultProps = {
    className: '',
    autoSize: false,
    label: ''
}

//
// The component
//

const BootstrapTextareaField = (props) => {
    let {
        name,
        value,
        label,
        error,
        onChange,
        className,
        autoSize
    } = props;

    if (!autoSize) {
        return (
            <div className={classnames(className, 'form-group', {
                'has-error': !!error
            })}>
                <label className="control-label">{label}</label>
                <textarea onChange={onChange} value={value} name={name} className="form-control" autoComplete="off" autoCorrect="off" autoCapitalize="off"/> {error && <small className="help-block">{error}</small>}
            </div>
        );
    }

    return (
        <div className={classnames(className, 'form-group', {
            'has-error': !!error
        })}>
            <label className="control-label">{label}</label>
            <TextareaAutosize onChange={onChange} value={value} name={name} className="form-control" autoComplete="off" autoCorrect="off" autoCapitalize="off"/> {error && <small className="help-block">{error}</small>}
        </div>
    );
}

// Export

BootstrapTextareaField.propTypes = propTypes;
BootstrapTextareaField.defaultProps = defaultProps;

export default BootstrapTextareaField;
