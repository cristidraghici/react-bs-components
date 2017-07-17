'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Props
//

var propTypes = {
    onHide: _propTypes2.default.func.isRequired,
    show: _propTypes2.default.any.isRequired,
    isForm: _propTypes2.default.bool.isRequired,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    classNameHeader: 'bg-primary',
    classNameFooter: 'modal-buttons',
    title: 'Modal',
    isForm: false,
    className: '',
    prependCloseButton: false

    //
    // Close button
    //

};var CloseButtonElement = function CloseButtonElement(props) {
    var onHide = props.onHide;


    return _react2.default.createElement(
        _reactBootstrap.Button,
        { onClick: onHide, name: 'BootstrapModalCloseButton' },
        'Close'
    );
};

//
// The component
//

var BootstrapModal = function BootstrapModal(props) {
    var classNameHeader = props.classNameHeader,
        classNameFooter = props.classNameFooter,
        title = props.title,
        show = props.show,
        content = props.content,
        onHide = props.onHide,
        buttons = props.buttons,
        className = props.className,
        prependCloseButton = props.prependCloseButton,
        isForm = props.isForm,
        onSubmit = props.onSubmit;


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

    if (isForm) {
        return _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: show, onHide: onHide, className: className },
            _react2.default.createElement(
                'form',
                { onSubmit: onSubmit },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { className: classNameHeader, closeButton: true },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Title,
                        null,
                        title
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    content
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    { className: classNameFooter },
                    buttons
                )
            )
        );
    }

    return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: show, onHide: onHide, className: className },
        _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { className: classNameHeader, closeButton: true },
            _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                title
            )
        ),
        _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            content
        ),
        _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            { className: classNameFooter },
            buttons
        )
    );
};

// Export

BootstrapModal.propTypes = propTypes;
BootstrapModal.defaultProps = defaultProps;

exports.default = BootstrapModal;