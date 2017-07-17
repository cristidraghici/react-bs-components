'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// Props
//

var propTypes = {
    onCopy: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.any.isRequired,
    className: _propTypes2.default.any.isRequired,
    text: _propTypes2.default.string.isRequired
};

var defaultProps = {
    onCopy: function onCopy() {},
    children: 'Copy to clipboard',
    className: 'btn-default'

    //
    // The component
    //

};
var BootstrapCopyToClipboard = function (_Component) {
    _inherits(BootstrapCopyToClipboard, _Component);

    function BootstrapCopyToClipboard() {
        var _temp, _this, _ret;

        _classCallCheck(this, BootstrapCopyToClipboard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onClick = function (e) {
            if (e && typeof e.preventDefault === 'function') {
                e.preventDefault();
            }

            var copied = (0, _copyToClipboard2.default)(_this.props.text, {
                debug: true,
                message: 'Press #{key} to copy'
            });

            _this.props.onCopy(copied);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    BootstrapCopyToClipboard.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            className = _props.className;


        return _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.onClick, className: className },
            children
        );
    };

    return BootstrapCopyToClipboard;
}(_react.Component);

// Export

BootstrapCopyToClipboard.propTypes = propTypes;
BootstrapCopyToClipboard.defaultProps = defaultProps;

exports.default = BootstrapCopyToClipboard;