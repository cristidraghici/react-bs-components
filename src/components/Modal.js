import React from 'react'
import PropTypes from 'prop-types'
import {Modal as OriginalModal, Button} from 'react-bootstrap'

//
// Props
//

const propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.any.isRequired,
    isForm: PropTypes.bool.isRequired,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    classNameHeader: 'bg-primary',
    classNameFooter: 'modal-buttons',
    title: 'Modal',
    isForm: false,
    className: '',
    prependCloseButton: false
}

//
// Close button
//

const CloseButtonElement = (props) => {
    let {onHide} = props;

    return (
        <Button onClick={onHide} name="BootstrapModalCloseButton">Close</Button>
    );
}

//
// The component
//

const BootstrapModal = (props) => {
    let {
        classNameHeader,
        classNameFooter,
        title,
        show,
        content,
        onHide,
        buttons,
        className,
        prependCloseButton,
        isForm,
        onSubmit
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

    if (isForm) {
        return (
            <OriginalModal show={show} onHide={onHide} className={className}>
                <form onSubmit={onSubmit}>
                    <OriginalModal.Header className={classNameHeader} closeButton>
                        <OriginalModal.Title>{title}</OriginalModal.Title>
                    </OriginalModal.Header>
                    <OriginalModal.Body>
                        {content}
                    </OriginalModal.Body>
                    <OriginalModal.Footer className={classNameFooter}>
                        {buttons}
                    </OriginalModal.Footer>
                </form>
            </OriginalModal>
        );
    }

    return (
        <OriginalModal show={show} onHide={onHide} className={className}>
            <OriginalModal.Header className={classNameHeader} closeButton>
                <OriginalModal.Title>{title}</OriginalModal.Title>
            </OriginalModal.Header>
            <OriginalModal.Body>
                {content}
            </OriginalModal.Body>
            <OriginalModal.Footer className={classNameFooter}>
                {buttons}
            </OriginalModal.Footer>
        </OriginalModal>
    );
}

// Export

BootstrapModal.propTypes = propTypes;
BootstrapModal.defaultProps = defaultProps;

export default BootstrapModal;
