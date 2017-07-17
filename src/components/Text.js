import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

//
// Props
//

const propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    inline: PropTypes.bool.isRequired,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    inline: false,
    className: ''
}

//
// The component
//

const BootstrapText = (props) => {
    let {value, label, error, inline, className} = props;

    if (inline) {
        return (
            <div>
                <div className={classnames(className, 'input-group', {
                    'has-error': !!error
                })}>
                    <span className="input-group-addon">{label}</span>
                    <div className="word-break-all">{value}</div>
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
            <div className="word-break-all">{value}</div>
            {error && <small className="help-block">{error}</small>}
        </div>
    );
}

// Export

BootstrapText.propTypes = propTypes;
BootstrapText.defaultProps = defaultProps;

export default BootstrapText;
