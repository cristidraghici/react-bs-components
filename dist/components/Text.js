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
    label: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    inline: _propTypes2.default.bool.isRequired,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    inline: false,
    className: ''

    //
    // The component
    //

};var BootstrapText = function BootstrapText(props) {
    var value = props.value,
        label = props.label,
        error = props.error,
        inline = props.inline,
        className = props.className;


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
                _react2.default.createElement(
                    'div',
                    { className: 'word-break-all' },
                    value
                )
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
        _react2.default.createElement(
            'div',
            { className: 'word-break-all' },
            value
        ),
        error && _react2.default.createElement(
            'small',
            { className: 'help-block' },
            error
        )
    );
};

// Export

BootstrapText.propTypes = propTypes;
BootstrapText.defaultProps = defaultProps;

exports.default = BootstrapText;