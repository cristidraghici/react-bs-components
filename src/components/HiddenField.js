import React from 'react'
import PropTypes from 'prop-types'

//
// Props
//

const propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
}

const defaultProps = {}

//
// The component
//

const BootstrapHiddenField = (props) => {
    let {name, value, onChange} = props;

    return (<input onChange={onChange} name={name} value={value} type="hidden"/>);
}

// Export

BootstrapHiddenField.propTypes = propTypes;
BootstrapHiddenField.defaultProps = defaultProps;

export default BootstrapHiddenField;
