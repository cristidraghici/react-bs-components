'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Props
//

var propTypes = {
    onHide: _propTypes2.default.func.isRequired,
    show: _propTypes2.default.any.isRequired,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    className: '',
    prependCloseButton: false

    //
    // Close button
    //

};var CloseButtonElement = function CloseButtonElement(props) {
    var onHide = props.onHide;


    return _react2.default.createElement(
        _reactBootstrap.Button,
        { onClick: onHide },
        'Close'
    );
};

//
// The component
//

var BootstrapWell = function BootstrapWell(props) {
    var show = props.show,
        content = props.content,
        onHide = props.onHide,
        buttons = props.buttons,
        className = props.className,
        prependCloseButton = props.prependCloseButton;


    if (!buttons) {
        buttons = _react2.default.createElement(CloseButtonElement, { onHide: onHide });
    }

    if (prependCloseButton) {
        buttons = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(CloseButtonElement, { onHide: onHide }),
            ' ',
            buttons
        );
    }

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('well', className, {
                'hidden': !show
            }) },
        _react2.default.createElement(
            'div',
            null,
            content
        ),
        _react2.default.createElement(
            'div',
            { className: 'text-right' },
            buttons
        )
    );
};

// Export

BootstrapWell.propTypes = propTypes;
BootstrapWell.defaultProps = defaultProps;

exports.default = BootstrapWell;