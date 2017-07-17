'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBootstrapDatePicker = require('react-bootstrap-date-picker');

var _reactBootstrapDatePicker2 = _interopRequireDefault(_reactBootstrapDatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// Props
//

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    className: ''

    //
    // The component
    //

};
var BootstrapDateField = function (_Component) {
    _inherits(BootstrapDateField, _Component);

    function BootstrapDateField() {
        var _temp, _this, _ret;

        _classCallCheck(this, BootstrapDateField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            value: false,
            formattedValue: null
        }, _this.handleChange = function (value, formattedValue) {
            _this.setState({
                value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
                formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    BootstrapDateField.prototype.componentDidMount = function componentDidMount() {
        this.setState({ value: this.props.value });
    };

    BootstrapDateField.prototype.render = function render() {
        var _props = this.props,
            label = _props.label,
            name = _props.name,
            error = _props.error,
            className = _props.className;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(className, 'form-group', { 'has-error': error }) },
            _react2.default.createElement(
                'label',
                { className: 'control-label' },
                label
            ),
            _react2.default.createElement(
                'div',
                { className: 'datefield-length-fix' },
                _react2.default.createElement(_reactBootstrapDatePicker2.default, { className: 'date-picker-full-length', value: this.state.value, onChange: this.handleChange, name: name, id: name })
            ),
            error && _react2.default.createElement(
                'span',
                { className: 'help-block' },
                error
            )
        );
    };

    return BootstrapDateField;
}(_react.Component);

// Export

BootstrapDateField.propTypes = propTypes;
BootstrapDateField.defaultProps = defaultProps;

exports.default = BootstrapDateField;