import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import copy from 'copy-to-clipboard'

//
// Props
//

const propTypes = {
    onCopy: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired
}

const defaultProps = {
    onCopy: () => {},
    children: 'Copy to clipboard',
    className: 'btn-default'
}

//
// The component
//

class BootstrapCopyToClipboard extends Component {
    onClick = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        let copied = copy(this.props.text, {
            debug: true,
            message: 'Press #{key} to copy'
        });

        this.props.onCopy(copied);
    }

    render() {
        let {children, className} = this.props;

        return (
            <Button onClick={this.onClick} className={className}>
                {children}
            </Button>
        );
    }
}

// Export

BootstrapCopyToClipboard.propTypes = propTypes;
BootstrapCopyToClipboard.defaultProps = defaultProps;

export default BootstrapCopyToClipboard;
