import React from 'react';
import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css'

const Notification = ({message}) => {
    return (
        <h3 className={s.Container}>{message}</h3>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;