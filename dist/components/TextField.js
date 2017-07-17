'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Props
//

var propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    type: _propTypes2.default.string.isRequired,
    inline: _propTypes2.default.bool.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.any.isRequired,
    allowAutocomplete: _propTypes2.default.bool.isRequired
};

var defaultProps = {
    type: 'text',
    inline: false,
    className: '',
    allowAutocomplete: false

    //
    // The component
    //

};var BootstrapTextField = function BootstrapTextField(props) {
    var name = props.name,
        value = props.value,
        label = props.label,
        error = props.error,
        type = props.type,
        inline = props.inline,
        onChange = props.onChange,
        className = props.className,
        allowAutocomplete = props.allowAutocomplete;


    if (inline) {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(className, 'input-group', {
                        'has-error': !!error
                    }) },
                _react2.default.createElement(
                    'span',
                    { className: 'input-group-addon' },
                    label
                ),
                !allowAutocomplete && _react2.default.createElement('input', { name: name, value: '', className: 'hidden' }),
                _react2.default.createElement('input', { onChange: onChange, value: value, type: type, name: name, className: 'form-control', autoComplete: 'none' })
            ),
            error && _react2.default.createElement(
                'small',
                { className: 'help-block text-right' },
                error
            )
        );
    }

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, 'form-group', {
                'has-error': !!error
            }) },
        _react2.default.createElement(
            'label',
            { className: 'control-label' },
            label
        ),
        !allowAutocomplete && _react2.default.createElement('input', { name: name, value: '', className: 'hidden' }),
        _react2.default.createElement('input', { onChange: onChange, value: value, type: type, name: name, className: 'form-control', autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off' }),
        ' ',
        error && _react2.default.createElement(
            'small',
            { className: 'help-block' },
            error
        )
    );
};

// Export

BootstrapTextField.propTypes = propTypes;
BootstrapTextField.defaultProps = defaultProps;

exports.default = BootstrapTextField;