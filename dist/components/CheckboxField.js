'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// Props
//

var propTypes = {
    name: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    error: _propTypes2.default.any,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    className: ''

    //
    // The component
    //

};
var BootstrapCheckboxField = function (_Component) {
    _inherits(BootstrapCheckboxField, _Component);

    function BootstrapCheckboxField(props) {
        _classCallCheck(this, BootstrapCheckboxField);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            name: props.name,
            checked: props.checked,
            label: props.label,
            error: props.error,
            onChange: props.onChange
        };

        _this.toggleIsChecked = _this.toggleIsChecked.bind(_this);
        return _this;
    }

    BootstrapCheckboxField.prototype.toggleIsChecked = function toggleIsChecked(e) {
        var _state = this.state,
            onChange = _state.onChange,
            name = _state.name;


        onChange.call(this, {
            target: {
                name: name,
                value: !this.state.checked
            }
        });

        this.setState({
            checked: !this.state.checked
        });
    };

    BootstrapCheckboxField.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (this.state.checked !== newProps.checked) {
            this.setState({ checked: newProps.checked });
        }
    };

    BootstrapCheckboxField.prototype.render = function render() {
        var _state2 = this.state,
            name = _state2.name,
            checked = _state2.checked,
            label = _state2.label,
            error = _state2.error;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('checkbox', { 'has-error': error }) },
            _react2.default.createElement(
                'label',
                { htmlFor: name },
                _react2.default.createElement('input', { type: 'checkbox', name: name, id: name, onChange: this.toggleIsChecked, checked: checked }),
                ' ',
                label
            ),
            error && _react2.default.createElement(
                'span',
                { className: 'help-block' },
                error
            )
        );
    };

    return BootstrapCheckboxField;
}(_react.Component);

// Export

BootstrapCheckboxField.propTypes = propTypes;
BootstrapCheckboxField.defaultProps = defaultProps;

exports.default = BootstrapCheckboxField;