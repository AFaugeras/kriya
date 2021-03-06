import React from 'react'
import { Menu, MenuItem } from '../components'
import Button from './components/button'
import Icon from './components/icon'
import Input from './components/input'
import Group from './components/group'
import Popover from './components/popover'
import BottomSheets from './components/bottomSheets'
import TabsScreen from './components/tabs'
import { Awesome } from './components/popovers'
import Toast from './components/toast'
import Toasts from './components/toasts'
import styles from './app.styles.scss'

const App = () => {
  return (
    <div className={styles.app}>
      {/* Menu */}
      <Menu className={styles.menu} footer={<div>Footer</div>} header={<div>Header</div>}>
        <MenuItem name="button" title="BUTTON">Buttons</MenuItem>
        <MenuItem name="icon" title="ICON">Icons</MenuItem>
        <MenuItem name="input" title="INPUT">Inputs</MenuItem>
        <MenuItem name="group" title="GROUP">Group</MenuItem>
        <MenuItem name="popover" title="POPOVER">Popover</MenuItem>
        <MenuItem name="bottomSheets" title="BOTTOMSHEETS">Bottom Sheets</MenuItem>
        <MenuItem name="tabs" title="TABS">Tabs</MenuItem>
        <MenuItem name="toast" title="TOAST">Toast</MenuItem>
      </Menu>

      {/* POPOVERS */}
      <Awesome />
      {/* Toasts */}
      <Toasts />

      {/* TABS */}
      <TabsScreen />

      {/* INPUT */}
      <Button />
      {/* ICON */}
      <Icon />
      {/* INPUT */}
      <Input />
      {/* INPUT IN GROUP */}
      <Group />
      {/* POPOVERS ACTION */}
      <Popover />
      {/* BottomSheets */}
      <BottomSheets />
      {/* TOAST */}
      <Toast />
    </div>
  )
}

export default App
