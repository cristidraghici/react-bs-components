import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Dropzone from 'react-dropzone'
import {pullAt, size, map} from 'lodash'

//
// Props
//

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    multiple: PropTypes.any,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    className: ''
}

//
// The component
//

class BootstrapUploadField extends Component {
    state = {
        list: []
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.value || newProps.value === '') {
            this.setState({list: []});
        }
    }

    updateState = (acceptedFiles, rejectedFiles) => {
        let list = acceptedFiles;

        this.setState({list: list});

        this.props.onChange.call(this, {
            target: {
                name: this.props.name,
                value: list
            }
        });
    }

    removeFile = (idx) => {
        let {list} = this.state;
        pullAt(list, [idx]);

        this.setState({list});

        this.props.onChange.call(this, {
            target: {
                name: this.props.name,
                value: list
            }
        });
    }

    renderList = () => {
        let {list} = this.state;
        let html = <div/>;
        let me = this;

        if (size(list) > 0) {
            html = map(list, function(val, idx) {
                let remove = () => {
                    me.removeFile(idx);
                }

                return <div key={'itemDetail-list-' + idx} className="infoRowContainer" onClick={remove}>
                    <strong>{val.name}</strong>
                    <span className="pull-right">
                        {val.size + ' bytes'}
                    </span>
                </div>;
            });
        }

        return (
            <div><br/>{html}</div>
        );
    }

    render() {
        let {name, label, error, multiple, className} = this.props;

        let html = this.renderList();

        return (
            <div className={classnames(className, 'form-group', {'has-error': error})}>
                <label className="control-label">{label}</label>

                <Dropzone onDrop={this.updateState} name={name} multiple={multiple} className="upload-input">
                    <div>Press here to select the files.</div>
                </Dropzone>

                {html}

                {error && <span className="help-block">{error}</span>}
            </div>
        );
    }
}

// Export

BootstrapUploadField.propTypes = propTypes;
BootstrapUploadField.defaultProps = defaultProps;

export default BootstrapUploadField;
