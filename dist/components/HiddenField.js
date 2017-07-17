'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Props
//

var propTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired
};

var defaultProps = {};

//
// The component
//

var BootstrapHiddenField = function BootstrapHiddenField(props) {
    var name = props.name,
        value = props.value,
        onChange = props.onChange;


    return _react2.default.createElement('input', { onChange: onChange, name: name, value: value, type: 'hidden' });
};

// Export

BootstrapHiddenField.propTypes = propTypes;
BootstrapHiddenField.defaultProps = defaultProps;

exports.default = BootstrapHiddenField;