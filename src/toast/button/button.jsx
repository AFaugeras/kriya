import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import styles from '../../../src/toast/button/button.styles.scss'

const Button = ({ style, className, text, onClick, type }) => {
  if (!text) return null
  const classes = classnames(
    styles.button,
    styles[type],
    className,
  )
  return (
    <button style={style} className={classes} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
}

Button.defaultProps = {
  style: {},
  className: '',
  text: '',
  onClick: undefined,
  type: 'default',
}

export default onlyUpdateForPropTypes(Button)