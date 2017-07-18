'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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
    valueKey: _propTypes2.default.string.isRequired,
    labelKey: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,

    noResultsText: _propTypes2.default.string,
    loadingPlaceholder: _propTypes2.default.string,
    searchPromptText: _propTypes2.default.string,
    className: _propTypes2.default.any.isRequired
};

var defaultProps = {
    noResultsText: 'No information to show.',
    loadingPlaceholder: 'Loading...',
    searchPromptText: 'Search',
    className: ''

    //
    // The component
    //

};
var BootstrapComboField = function (_Component) {
    _inherits(BootstrapComboField, _Component);

    function BootstrapComboField() {
        var _temp, _this, _ret;

        _classCallCheck(this, BootstrapComboField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            value: null,
            options: []
        }, _this.updateState = function (data) {
            var _this$props = _this.props,
                name = _this$props.name,
                valueKey = _this$props.valueKey,
                onChange = _this$props.onChange;


            _this.setState({ value: data[valueKey] });

            onChange.call(_this, {
                target: {
                    name: name,
                    value: data[valueKey]
                }
            });
        }, _this.getOptions = function () {
            var me = _this;

            return _axios2.default.get(_this.props.source).then(function (res) {
                me.setState({ options: res.data.data });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    BootstrapComboField.prototype.componentDidMount = function componentDidMount() {
        this.getOptions();
    };

    BootstrapComboField.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (this.state.value !== newProps.value) {
            this.setState({ value: newProps.value });
        }

        if (this.props.forceUpdate !== newProps.forceUpdate) {
            this.getOptions();
        }
    };

    BootstrapComboField.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            label = _props.label,
            labelKey = _props.labelKey,
            valueKey = _props.valueKey,
            error = _props.error,
            noResultsText = _props.noResultsText,
            loadingPlaceholder = _props.loadingPlaceholder,
            searchPromptText = _props.searchPromptText,
            className = _props.className;
        var _state = this.state,
            value = _state.value,
            options = _state.options;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(className, 'form-group', { 'has-error': error }) },
            _react2.default.createElement(
                'label',
                { className: 'control-label' },
                label
            ),
            _react2.default.createElement(_reactSelect2.default, { name: name, value: value, resetValue: value, onChange: this.updateState, valueKey: valueKey, labelKey: labelKey, noResultsText: noResultsText, loadingPlaceholder: loadingPlaceholder, searchPromptText: searchPromptText, options: options }),
            error && _react2.default.createElement(
                'small',
                { className: 'help-block' },
                error
            )
        );
    };

    return BootstrapComboField;
}(_react.Component);

// Export

BootstrapComboField.propTypes = propTypes;
BootstrapComboField.defaultProps = defaultProps;

exports.default = BootstrapComboField;