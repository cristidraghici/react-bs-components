'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAutosizeTextarea = require('react-autosize-textarea');

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Props
//

var propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.any.isRequired,
    autoSize: _propTypes2.default.bool.isRequired
};

var defaultProps = {
    className: '',
    autoSize: false,
    label: ''

    //
    // The component
    //

};var BootstrapTextareaField = function BootstrapTextareaField(props) {
    var name = props.name,
        value = props.value,
        label = props.label,
        error = props.error,
        onChange = props.onChange,
        className = props.className,
        autoSize = props.autoSize;


    if (!autoSize) {
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
            _react2.default.createElement('textarea', { onChange: onChange, value: value, name: name, className: 'form-control', autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off' }),
            ' ',
            error && _react2.default.createElement(
                'small',
                { className: 'help-block' },
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
        _react2.default.createElement(_reactAutosizeTextarea2.default, { onChange: onChange, value: value, name: name, className: 'form-control', autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off' }),
        ' ',
        error && _react2.default.createElement(
            'small',
            { className: 'help-block' },
            error
        )
    );
};

// Export

BootstrapTextareaField.propTypes = propTypes;
BootstrapTextareaField.defaultProps = defaultProps;

exports.default = BootstrapTextareaField;