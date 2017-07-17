'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _lodash = require('lodash');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// Props
//

var propTypes = {
    onConfirm: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.any.isRequired,
    title: _propTypes2.default.string,
    message: _propTypes2.default.any.isRequired,
    show: _propTypes2.default.bool,
    mainButtonClass: _propTypes2.default.any.isRequired,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    show: false,
    mainButtonClass: 'btn-primary',
    className: ''

    //
    // The component
    //

};
var BootstrapConfirm = function (_Component) {
    _inherits(BootstrapConfirm, _Component);

    function BootstrapConfirm() {
        var _temp, _this, _ret;

        _classCallCheck(this, BootstrapConfirm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            show: false
        }, _this.onHide = function (e) {
            if (e && typeof e.preventDefault === 'function') {
                e.preventDefault();
            }

            _this.setState({ show: false });
        }, _this.onShow = function (e) {
            if (e && typeof e.preventDefault === 'function') {
                e.preventDefault();
            }

            _this.setState({ show: true });
        }, _this.onConfirmAltered = function (e) {
            if (e && typeof e.preventDefault === 'function') {
                e.preventDefault();
            }

            _this.setState({ show: false });

            if (typeof _this.props.onConfirm === 'function') {
                _this.props.onConfirm.call(_this);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    BootstrapConfirm.prototype.componentDidMount = function componentDidMount() {
        if (this.props.show === true) {
            this.setState({ show: true });
        }
    };

    BootstrapConfirm.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            message = _props.message,
            mainButtonClass = _props.mainButtonClass,
            className = _props.className;
        var show = this.state.show;


        var Buttons = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.onHide },
                'No'
            ),
            _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.onConfirmAltered, className: mainButtonClass },
                'Yes'
            )
        );

        return _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.onShow, className: className },
            children,
            _react2.default.createElement(_Modal2.default, _extends({}, (0, _lodash.omit)(this.props, 'children', 'onConfirm', 'message'), { content: message, show: show, buttons: Buttons, onHide: this.onHide }))
        );
    };

    return BootstrapConfirm;
}(_react.Component);

// Export

BootstrapConfirm.propTypes = propTypes;
BootstrapConfirm.defaultProps = defaultProps;

exports.default = BootstrapConfirm;