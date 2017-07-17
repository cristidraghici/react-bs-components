import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Button} from 'react-bootstrap'

//
// Props
//

const propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.any.isRequired,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    className: '',
    prependCloseButton: false
}

//
// Close button
//

const CloseButtonElement = (props) => {
    let {onHide} = props;

    return (
        <Button onClick={onHide}>Close</Button>
    );
}

//
// The component
//

const BootstrapWell = (props) => {
    let {
        show,
        content,
        onHide,
        buttons,
        className,
        prependCloseButton
    } = props;

    if (!buttons) {
        buttons = <CloseButtonElement onHide={onHide}/>
    }

    if (prependCloseButton) {
        buttons = (
            <div>
                <CloseButtonElement onHide={onHide}/> {buttons}
            </div>
        );
    }

    return (
        <div className={classnames('well', className, {
            'hidden': !show
        })}>
            <div>{content}</div>

            <div className="text-right">
                {buttons}
            </div>
        </div>
    );
}

// Export

BootstrapWell.propTypes = propTypes;
BootstrapWell.defaultProps = defaultProps;

export default BootstrapWell;
