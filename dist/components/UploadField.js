'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// Props
//

var propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    multiple: _propTypes2.default.any,
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
var BootstrapUploadField = function (_Component) {
    _inherits(BootstrapUploadField, _Component);

    function BootstrapUploadField() {
        var _temp, _this, _ret;

        _classCallCheck(this, BootstrapUploadField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            list: []
        }, _this.updateState = function (acceptedFiles, rejectedFiles) {
            var list = acceptedFiles;

            _this.setState({ list: list });

            _this.props.onChange.call(_this, {
                target: {
                    name: _this.props.name,
                    value: list
                }
            });
        }, _this.removeFile = function (idx) {
            var list = _this.state.list;

            (0, _lodash.pullAt)(list, [idx]);

            _this.setState({ list: list });

            _this.props.onChange.call(_this, {
                target: {
                    name: _this.props.name,
                    value: list
                }
            });
        }, _this.renderList = function () {
            var list = _this.state.list;

            var html = _react2.default.createElement('div', null);
            var me = _this;

            if ((0, _lodash.size)(list) > 0) {
                html = (0, _lodash.map)(list, function (val, idx) {
                    var remove = function remove() {
                        me.removeFile(idx);
                    };

                    return _react2.default.createElement(
                        'div',
                        { key: 'itemDetail-list-' + idx, className: 'infoRowContainer', onClick: remove },
                        _react2.default.createElement(
                            'strong',
                            null,
                            val.name
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'pull-right' },
                            val.size + ' bytes'
                        )
                    );
                });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('br', null),
                html
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    BootstrapUploadField.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (!newProps.value || newProps.value === '') {
            this.setState({ list: [] });
        }
    };

    BootstrapUploadField.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            label = _props.label,
            error = _props.error,
            multiple = _props.multiple,
            className = _props.className;


        var html = this.renderList();

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(className, 'form-group', { 'has-error': error }) },
            _react2.default.createElement(
                'label',
                { className: 'control-label' },
                label
            ),
            _react2.default.createElement(
                _reactDropzone2.default,
                { onDrop: this.updateState, name: name, multiple: multiple, className: 'upload-input' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Press here to select the files.'
                )
            ),
            html,
            error && _react2.default.createElement(
                'span',
                { className: 'help-block' },
                error
            )
        );
    };

    return BootstrapUploadField;
}(_react.Component);

// Export

BootstrapUploadField.propTypes = propTypes;
BootstrapUploadField.defaultProps = defaultProps;

exports.default = BootstrapUploadField;