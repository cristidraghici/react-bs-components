import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import {omit} from 'lodash'

import Modal from './Modal'

//
// Props
//

const propTypes = {
    onConfirm: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    message: PropTypes.any.isRequired,
    show: PropTypes.bool,
    mainButtonClass: PropTypes.any.isRequired,
    className: PropTypes.any.isRequired
}

const defaultProps = {
    show: false,
    mainButtonClass: 'btn-primary',
    className: ''
}

//
// The component
//

class BootstrapConfirm extends Component {
    state = {
        show: false
    }

    componentDidMount() {
        if (this.props.show === true) {
            this.setState({show: true});
        }
    }

    onHide = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        this.setState({show: false});
    }

    onShow = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        this.setState({show: true});
    }

    onConfirmAltered = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault();
        }

        this.setState({show: false});

        if (typeof this.props.onConfirm === 'function') {
            this.props.onConfirm.call(this);
        }
    }

    render() {
        let {children, message, mainButtonClass, className} = this.props;
        let {show} = this.state;

        let Buttons = (
            <div>
                <Button onClick={this.onHide}>No</Button>
                <Button onClick={this.onConfirmAltered} className={mainButtonClass}>Yes</Button>
            </div>
        );

        return (
            <Button onClick={this.onShow} className={className}>
                {children}
                <Modal {...omit(this.props, 'children', 'onConfirm', 'message')} content={message} show={show} buttons={Buttons} onHide={this.onHide}/>
            </Button>
        );
    }
}

// Export

BootstrapConfirm.propTypes = propTypes;
BootstrapConfirm.defaultProps = defaultProps;

export default BootstrapConfirm;
