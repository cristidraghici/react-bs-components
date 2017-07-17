import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Select from 'react-select'
import axios from 'axios'

import 'react-select/dist/react-select.css';

//
// Props
//

const propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    valueKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,

    noResultsText: PropTypes.string,
    loadingPlaceholder: PropTypes.string,
    searchPromptText: PropTypes.string,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    noResultsText: 'No information to show.',
    loadingPlaceholder: 'Loading...',
    searchPromptText: 'Search',
    className: ''
}

//
// The component
//

class BootstrapComboField extends Component {
    state = {
        value: null,
        options: []
    }

    updateState = (data) => {
        let {name, valueKey, onChange} = this.props;

        this.setState({value: data[valueKey]});

        onChange.call(this, {
            target: {
                name: name,
                value: data[valueKey]
            }
        });
    }

    getOptions = () => {
        let me = this;

        return axios.get(this.props.source).then((res) => {
            me.setState({options: res.data.data});
        });
    }

    componentDidMount() {
        this.getOptions();
    }

    componentWillReceiveProps(newProps) {
        if (this.state.value !== newProps.value) {
            this.setState({value: newProps.value});
        }

        if (this.props.forceUpdate !== newProps.forceUpdate) {
            this.getOptions();
        }
    }

    render() {
        let {
            name,
            label,
            labelKey,
            valueKey,
            error,
            noResultsText,
            loadingPlaceholder,
            searchPromptText,
            className
        } = this.props;

        let {value, options} = this.state;

        return (
            <div className={classnames(className, 'form-group', {'has-error': error})}>
                <label className="control-label">{label}</label>
                <Select name={name} value={value} resetValue={value} onChange={this.updateState} valueKey={valueKey} labelKey={labelKey} noResultsText={noResultsText} loadingPlaceholder={loadingPlaceholder} searchPromptText={searchPromptText} options={options}></Select>

                {error && <small className="help-block">{error}</small>}
            </div>
        );
    }
}

// Export

BootstrapComboField.propTypes = propTypes;
BootstrapComboField.defaultProps = defaultProps;

export default BootstrapComboField;
