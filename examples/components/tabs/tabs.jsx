import React from 'react'
import PropTypes from 'prop-types'
import router from 'hoc-little-router'
import classnames from 'classnames'
import { Tabs as KriyaTabs } from '../../../components'
import styles from './tabs.styles.scss'

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <KriyaTabs />
    </div>
  )
}

export default router('TABS')(Tabs)
